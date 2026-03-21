// Research renderer — reads from research-data.js
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.research-grid');
  if (!grid) return;

  grid.innerHTML = '';

  researchData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'research-item';
    el.style.transitionDelay = `${i * 0.1}s`;

    el.innerHTML = `
      <div class="research-card">
        <div class="research-thumb">
          <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" onerror="this.parentElement.style.background='var(--cream)'">
          <span class="research-type">${item.type.toUpperCase()}</span>
        </div>
        <div class="research-body">
          <p class="research-date">${item.date}</p>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <div class="research-tags">
            ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="research-actions">
            <a href="${item.documentUrl}" target="_blank" class="research-btn view-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
              View
            </a>
            <a href="${item.documentUrl}" download class="research-btn download-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(el);
  });

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.research-item').forEach(el => observer.observe(el));
});
