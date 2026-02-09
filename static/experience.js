// Experience Module
class ExperienceManager {
    constructor() {
        this.experiences = experienceData;
    }

    init() {
        this.renderExperience();
        this.setupAnimations();
    }

    renderExperience() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = '';

        this.experiences.forEach(exp => {
            const experienceElement = this.createExperienceElement(exp);
            timeline.appendChild(experienceElement);
        });
    }

    createExperienceElement(exp) {
        const div = document.createElement('div');
        div.className = 'timeline-item';

        div.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-date">${exp.date}</div>
      <div class="timeline-content">
        <h4>${exp.company}</h4>
        <p class="role">${exp.role}</p>
        <p>${exp.description}</p>
        ${exp.tags ? `
          <div class="experience-tags">
            ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `;

        return div;
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    const experienceManager = new ExperienceManager();
    experienceManager.init();
});
