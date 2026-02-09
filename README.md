# Dalex Davis Portfolio Website

A modern, interactive portfolio website with modular architecture, featuring animated backgrounds, project showcases, and research publications.

## 🎨 Features

- **Interactive Background**: Mouse-responsive gradient with particles and ripple effects
- **Modular Architecture**: Separated JavaScript modules for easy maintenance
- **Projects Showcase**: Filterable project gallery with videos and images
- **Research Section**: Display PDFs and documents with view/download options
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Glassmorphism UI**: Modern frosted glass effects throughout

## 📁 Project Structure

```
portfolio/
├── index.html                      # Main HTML file
├── README.md                       # This file
├── images/                         # Image assets
│   ├── DALEXIMG.jpg               # Profile image
│   ├── DX-LOGO.png                # Site favicon
│   └── ...                        # Project and research images
├── research/                       # Research documents (PDFs)
│   ├── iot-water-management.pdf
│   ├── ml-urban-safety.pdf
│   └── ...
├── cv_folder/                      # CV/Resume files
│   └── DalexDavis_CV_2026.pdf
└── static/                         # Static assets
    ├── style.css                   # Main stylesheet
    ├── projects-data.js            # Projects data configuration
    ├── research-data.js            # Research data configuration
    ├── experience-data.js          # Experience data configuration
    ├── projects.js                 # Projects module
    ├── research.js                 # Research module
    ├── experience.js               # Experience module
    └── interactive-effects.js      # Interactive effects module
```

## 🚀 Getting Started

### 1. Clone or Download

Download this repository to your local machine or web server.

### 2. Add Your Content

#### Projects
Edit `static/projects-data.js` to add/modify your projects:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  category: "web", // web, mobile, video, or other
  imageUrl: "/images/your-project.jpg",
  projectUrl: "https://your-project-url.com",
  tags: ["React", "Node.js"]
}
```

#### Research Documents
1. Upload your PDF files to the `research/` folder
2. Edit `static/research-data.js`:

```javascript
{
  id: 1,
  title: "Your Research Title",
  description: "Research description",
  type: "pdf",
  documentUrl: "/research/your-document.pdf",
  date: "2024",
  tags: ["AI", "Machine Learning"],
  thumbnail: "/images/research-thumb.jpg"
}
```

#### Images
- Add project images to `images/` folder
- Update image paths in data files
- Recommended sizes:
  - Project images: 800x600px
  - Research thumbnails: 600x400px
  - Profile image: 500x500px

### 3. Update Personal Information

Edit `index.html` to update:
- Name and tagline
- About section text
- Social media links
- CV file path
- Contact information

## 📄 Adding Research Documents

### For GitHub Hosting:

1. **Upload PDFs to GitHub**:
   ```
   research/
   ├── your-paper.pdf
   ├── your-thesis.pdf
   └── your-report.pdf
   ```

2. **Get Raw URLs**:
   - Navigate to your PDF on GitHub
   - Click "Raw" button
   - Copy the URL (format: `https://raw.githubusercontent.com/username/repo/main/research/file.pdf`)

3. **Update research-data.js**:
   ```javascript
   documentUrl: "https://raw.githubusercontent.com/yourusername/yourrepo/main/research/your-paper.pdf"
   ```

### For Direct Hosting:

Simply place PDFs in the `research/` folder and use relative paths:
```javascript
documentUrl: "/research/your-paper.pdf"
```

## 🎨 Customization

### Colors
Edit CSS variables in `static/style.css`:
```css
:root {
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-light: rgba(255, 255, 255, 0.9);
  --accent-color: #3182ce;
}
```

### Gradient Background
Modify gradient colors in `static/style.css`:
```css
.gradient-bg {
  background: linear-gradient(135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%);
}
```

### Interactive Effects
Adjust particle and ripple effects in `static/interactive-effects.js`:
- Particle count
- Animation speeds
- Effect sizes
- Trigger frequencies

## 🔧 Modules Explained

### `projects-data.js`
Contains all project information. Easy to add/remove projects without touching HTML.

### `research-data.js`
Contains research papers and publications data. Supports PDFs with view/download options.

### `projects.js`
Handles:
- Dynamic project rendering
- Category filtering
- Scroll animations
- Project card generation

### `research.js`
Handles:
- Dynamic research card rendering
- PDF viewer integration
- Download functionality
- Scroll animations

### `interactive-effects.js`
Manages:
- Cursor glow effects
- Particle systems
- Ripple animations
- Touch interactions
- Hover effects

## 📱 Responsive Design

The site automatically adapts to:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deployment

### GitHub Pages:
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify/Vercel:
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support available

## 📝 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact me directly.

---

Built with ❤️ by Dalex Davis
