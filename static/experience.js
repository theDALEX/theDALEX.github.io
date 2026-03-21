// Experience renderer — reads from experience-data.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = '';

    experienceData.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'timeline-item';
        el.style.transitionDelay = `${i * 0.1}s`;

        el.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-content">
        <h4>${item.company}</h4>
        <p class="role">${item.role}</p>
        <p>${item.description}</p>
        ${item.tags && item.tags.length ? `
          <div class="experience-tags">
            ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>` : ''}
      </div>
    `;

        container.appendChild(el);
    });

    // Animate on scroll
    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
});
