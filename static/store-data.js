/**
 * DX Store Data
 * ─────────────────────────────────────────────────────────────
 * To add a new app, copy the object below and fill it in.
 * Both the home page and store page render from this file.
 *
 * Card fields:
 *   id              – unique slug
 *   name            – display name
 *   version         – e.g. "v1.0.0"
 *   price           – "Free" or a price string
 *   description     – short description shown on the card
 *   tags            – array of tag strings
 *   logo            – path to logo image (e.g. "/images/openmarker-logo.png"), or null to use the SVG icon
 *   icon            – inline SVG path string used when logo is null
 *   iconViewBox     – viewBox for the icon svg (default "0 0 24 24")
 *   downloads       – array of { platform, label, url } — set url to null for "Coming soon"
 *   detailsUrl      – external link shown alongside the expand button (GitHub etc.), or null
 *
 * Detail panel fields (shown when user clicks "Details"):
 *   longDescription – full paragraph(s) about the app (HTML string allowed)
 *   features        – array of feature strings
 *   requirements    – array of requirement strings
 */

const storeData = [
    {
        id: "openmarker",
        name: "OpenMarker",
        version: "v1.0.1",
        price: "Free & Open Source",
        description: "OpenMarker is an AI-powered grading assistant for teachers and lecturers. Automatically grade essays and reports so you can spend more time teaching and engaging with students.",
        tags: ["AI / LLM Agent", "Education", "Local-first", "Desktop/Laptop"],
        logo: "/images/storeIconImages/openmarkerIcon.jpg",
        icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        iconViewBox: "0 0 24 24",
        downloads: [
            { platform: "windows", label: "Windows", url: "https://github.com/dalexdavis/openmarker/releases/download/v1.0.1/OpenMarker.Setup.1.0.1.exe" },
            { platform: "macos", label: "macOS", url: "https://github.com/dalexdavis/openmarker/releases/download/v1.0.1/OpenMarker-1.0.1-arm64.dmg" },
            { platform: "linux", label: "Linux", url: "https://github.com/dalexdavis/openmarker/releases/download/v1.0.1/OpenMarker-1.0.1.AppImage" }


        ],
        detailsUrl: "https://github.com/dalexdavis/OpenMarker",
        longDescription: `OpenMarker is an AI-powered grading assistant designed for teachers and lecturers. It automatically evaluates essays and reports, allowing you to spend more time teaching and engaging with students.

In testing, OpenMarker showed an average deviation of just 6% compared to human grading, making it a reliable tool that can save you hours of marking each week.

The software runs entirely on your local computer using efficient large language models (LLMs), which you can choose based on your hardware. Simply click “Start Marking,” and OpenMarker will assess the work and return a detailed Word document with feedback and grades.

This is version 1 of OpenMarker. The next version will introduce grade balancing tailored to each educator and aims to further reduce the grading deviation more.

<strong>Installation & safety note</strong><br>
OpenMarker is not signed for macOS, Windows, or Linux, so you may see a warning when installing it. It is completely safe, as all processing runs locally.

<strong>How to run</strong>
<ul>
  <li><strong>macOS</strong>: Right-click → Open → Confirm</li>
  <li><strong>Windows</strong>: Click “More info” → “Run anyway” if a SmartScreen warning appears</li>
  <li><strong>Linux</strong>: Make it executable (<code>chmod +x OpenMarker</code>) and run (<code>./OpenMarker</code>)</li>
</ul>
`,
        features: [
            "AI-powered marking using local LLMs",
            "Supports custom marking matrix and criteria",
            "Batch process multiple submissions at once",
            "Generates detailed written feedback per student",
            "Fully offline — no data leaves your device"
        ],
        requirements: [
            "you can run it on a reasonably modern Windows, macOS, or Linux computer (4GB+ RAM, 5GB disk space)",
            "You can choose the AI model based on your hardware capabilities and needs."
        ]
    }
    // ── Add more apps below ──────────────────────────────────────
    // {
    //   id: "myapp",
    //   name: "My App",
    //   version: "v1.0.0",
    //   price: "Free",
    //   description: "Short description.",
    //   tags: ["Tag1", "Tag2"],
    //   logo: "/images/myapp-logo.png",   // or null
    //   icon: `<circle cx="12" cy="12" r="10"/>`,
    //   iconViewBox: "0 0 24 24",
    //   downloads: [
    //     { platform: "windows", label: "Windows", url: "https://..." },
    //     { platform: "macos",   label: "macOS",   url: null }
    //   ],
    //   detailsUrl: null,
    //   longDescription: "Full description here.",
    //   features: ["Feature 1", "Feature 2"],
    //   requirements: ["Requirement 1"]
    // }
];

if (typeof module !== 'undefined' && module.exports) module.exports = storeData;
