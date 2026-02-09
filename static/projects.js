// Projects Module
class ProjectsManager {
  constructor() {
    this.projects = projectsData;
    this.currentFilter = 'all';
  }

  init() {
    this.renderProjects();
    this.setupFilters();
    this.setupAnimations();
  }

  renderProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    this.projects.forEach(project => {
      const projectElement = this.createProjectElement(project);
      grid.appendChild(projectElement);
    });
  }

  createProjectElement(project) {
    const div = document.createElement('div');
    div.className = `project-item ${project.category}`;
    if (project.featured) div.classList.add('featured');
    div.setAttribute('data-category', project.category);

    // Check if it's a YouTube video
    if (project.youtubeId) {
      div.innerHTML = `
        <div class="project-content">
          <div class="video-container youtube-container">
            <iframe 
              src="https://www.youtube.com/embed/${project.youtubeId}" 
              title="${project.title}"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="project-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (project.videoUrl) {
      // Local video file
      div.innerHTML = `
        <div class="project-content">
          <div class="video-container">
            <video controls poster="${project.videoPoster || ''}">
              <source src="${project.videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="project-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      // Image-based project
      div.innerHTML = `
        <div class="project-content">
          <div class="project-image">
            <img src="${project.imageUrl}" alt="${project.title}" onerror="this.style.display='none'">
            <div class="project-overlay">
              <a href="${project.projectUrl}" class="project-link-overlay" target="_blank">View Project</a>
            </div>
          </div>
          <div class="project-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    return div;
  }

  setupFilters() {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        this.filterProjects(category);

        // Update active button
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  filterProjects(category) {
    this.currentFilter = category;
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
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

    // Observe project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
  const projectsManager = new ProjectsManager();
  projectsManager.init();
});
