const sharedLayoutConfig = {
  navLinks: [
    { label: "Home", href: "/", page: "home" },
    { label: "My Thoughts", href: "/my-thoughts.html", page: "thoughts" },
    { label: "About", href: "/#about", section: "about" },
    { label: "Projects", href: "/#projects", section: "projects" },
    { label: "Experience", href: "/#experience", section: "experience" },
    { label: "DX's Store", href: "/dx-store.html", page: "store" },
    { label: "Contact", href: "/#contact", section: "contact" },
  ],
  footerLinks: [
    { label: "Email", href: "mailto:dxsecondarymail@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dalexdavis/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/dalexdavis",
      external: true,
    },
    { label: "X", href: "https://x.com/thedalexdavis", external: true },
    {
      label: "Instagram",
      href: "https://www.instagram.com/thedalexdavis/",
      external: true,
    },
    {
      label: "Medium",
      href: "https://medium.com/@thedalexdavis",
      external: true,
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/dalexdavis",
      external: true,
    },
    {
      label: "Substack",
      href: "https://dalexdavis.substack.com",
      external: true,
    },
    {
      label: "citynoise",
      href: "https://citynoisepage.vercel.app",
      external: true,
    },
  ],
};

function buildNavLink(link, currentPage) {
  const isCurrentPage = link.page && link.page === currentPage;
  const classes = ["nav-link"];

  if (isCurrentPage) {
    classes.push("active");
  }

  const sectionAttr = link.section ? ` data-section="${link.section}"` : "";

  return `<a href="${link.href}" class="${classes.join(" ")}"${sectionAttr}>${link.label}</a>`;
}

function buildFooterLink(link) {
  const extraAttrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
  return `<a href="${link.href}" class="footer-link"${extraAttrs}>${link.label}</a>`;
}

function renderSharedLayout() {
  const currentPage = document.body.dataset.page || "";
  const navMount = document.querySelector("[data-shared-nav]");
  const footerMount = document.querySelector("[data-shared-footer]");

  if (navMount) {
    navMount.outerHTML = `
      <nav class="nav">
        <a href="/" class="nav-logo">DX</a>
        <div class="nav-links">
          ${sharedLayoutConfig.navLinks
        .map((link) => buildNavLink(link, currentPage))
        .join("")}
        </div>
      </nav>`;
  }

  if (footerMount) {
    footerMount.outerHTML = `
      <footer class="footer" id="contact">
        <div class="footer-inner">
          <div>
            <p class="footer-logo">Dalex <em>Davis</em></p>
            <p class="footer-tagline">
              This is my digital book - ideas, experiences, and whatever I'm up to.
            </p>
          </div>
          <div class="footer-links">
            ${sharedLayoutConfig.footerLinks.map(buildFooterLink).join("")}
          </div>
        </div>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} Dalex Davis</p>
      </footer>`;
  }
}

renderSharedLayout();
