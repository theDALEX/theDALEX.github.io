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
        version: "v1.0.0",
        price: "Free",
        description: "Automates the marking and grading of student work using locally hosted AI models. Expert-quality feedback, significantly faster — fully private, runs entirely on your device.",
        tags: ["AI / LLM", "Education", "Local-first", "Desktop"],
        logo: "/images/storeIconImages/openmarkerIcon.jpg",
        icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        iconViewBox: "0 0 24 24",
        downloads: [
            { platform: "windows", label: "Windows", url: "https://github.com/theDALEX/OpenMarker/releases/latest/download/OpenMarker.exe" },
            { platform: "macos", label: "macOS", url: "https://github.com/theDALEX/OpenMarker/releases/latest/download/OpenMarker.dmg" },
            { platform: "linux", label: "Linux", url: "https://github.com/theDALEX/OpenMarker/releases/latest/download/OpenMarker.AppImage" }
        ],
        detailsUrl: "https://github.com/theDALEX/OpenMarker",
        longDescription: `OpenMarker is a desktop application that uses locally hosted AI models (via Ollama) to automatically mark and grade student work. It runs entirely on your machine — no internet connection required after setup, no data sent to external servers. Designed for educators who want fast, consistent, expert-level feedback without compromising student privacy.`,
        features: [
            "AI-powered marking using local LLMs via Ollama",
            "Supports custom marking rubrics and criteria",
            "Batch process multiple submissions at once",
            "Generates detailed written feedback per student",
            "Fully offline — no data leaves your device",
            "Works with PDF, DOCX, and plain text submissions",
            "Export results to CSV or PDF report"
        ],
        requirements: [
            "Windows 10+, macOS 12+, or Ubuntu 20.04+",
            "Ollama installed and running locally",
            "8 GB RAM minimum (16 GB recommended for larger models)",
            "2 GB free disk space"
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
