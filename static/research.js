// Research Module
class ResearchManager {
    constructor() {
        this.research = researchData;
    }

    init() {
        this.renderResearch();
        this.setupAnimations();
    }

    renderResearch() {
        const grid = document.querySelector('.research-grid');
        if (!grid) return;

        grid.innerHTML = '';

        this.research.forEach(item => {
            const researchElement = this.createResearchElement(item);
            grid.appendChild(researchElement);
        });
    }

    createResearchElement(item) {
        const div = document.createElement('div');
        div.className = 'research-item';

        div.innerHTML = `
      <div class="research-card">
        <div class="research-thumbnail">
          <img src="${item.thumbnail}" alt="${item.title}" onerror="this.src='/images/default-research.jpg'">
          <div class="research-type-badge">${item.type.toUpperCase()}</div>
        </div>
        <div class="research-info">
          <div class="research-date">${item.date}</div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <div class="research-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="research-actions">
            <a href="${item.documentUrl}" target="_blank" class="research-btn view-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View
            </a>
            <a href="${item.documentUrl}" download class="research-btn download-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          </div>
        </div>
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

        // Observe research items
        const researchItems = document.querySelectorAll('.research-item');
        researchItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    const researchManager = new ResearchManager();
    researchManager.init();
});
