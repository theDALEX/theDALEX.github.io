// Education Module - Simple List Design
class EducationManager {
  constructor() {
    this.education = educationData;
  }

  init() {
    this.renderEducation();
    this.setupAnimations();
  }

  renderEducation() {
    const container = document.querySelector('.education-list');
    if (!container) return;

    container.innerHTML = '';

    this.education.forEach(edu => {
      const educationElement = this.createEducationElement(edu);
      container.appendChild(educationElement);
    });
  }

  createEducationElement(edu) {
    const div = document.createElement('div');
    div.className = 'education-list-item';

    const title = edu.degree || edu.program;
    const showGrade = edu.grade && edu.type !== 'program';

    div.innerHTML = `
      <div class="edu-date">${edu.date}</div>
      <div class="edu-content">
        <h4>${title}</h4>
        <p class="edu-institution">${edu.institution}</p>
        ${showGrade ? `<span class="edu-grade">${edu.grade}</span>` : ''}
        ${edu.description ? `<p class="edu-desc">${edu.description}</p>` : ''}
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

    const educationItems = document.querySelectorAll('.education-list-item');
    educationItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
  const educationManager = new EducationManager();
  educationManager.init();
});
