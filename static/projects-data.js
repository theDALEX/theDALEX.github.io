const projectsData = [
    {
        id: 1,
        title: "AWS Breaking Barriers Challenge, 2026",
        description: "Our product was Ally, a partner app for Ukind charity for their VR headsets. This is the presentation that advanced to the final round representing Manchester.",
        category: "video",
        featured: true,
        youtubeId: "5VkdfzVYFJU",
        tags: ["AWS", "Software Development", "Hackathon finalist"]
    },
    {
        id: 2,
        title: "Asphira",
        description: "A location-based mobile app that analyses real crime data to generate clear, reliable safety scores for any area. Helps you understand how safe a place is before you travel, commute, or explore.",
        category: "mobile app",
        imageUrl: "/images/projectImages/asphira.jpeg",
        projectUrl: "https://github.com/theDALEX/Asphira.git",
        tags: ["React Native", "TypeScript", "Personal Safety"]
    },
    {
        id: 3,
        title: "Commonwealth Games +",
        description: "Created as part of the Big Science Tech Fest challenge 2026 at Manchester Metropolitan University. The challenge focused on improving engagement with the Commonwealth Games — our team won the Tech Fest.",
        category: "mobile app",
        imageUrl: "/images/projectImages/commonwealthgamesapp.jpeg",
        projectUrl: "https://github.com/theDALEX/Common_wealth_games_plus_app.git",
        tags: ["React Native", "Expo"]
    },
    {
        id: 4,
        title: "Student Studio",
        description: "Formed during a hackathon jam. We analysed key student issues and built a hyper-personalised app with integrated AI to address them effectively.",
        category: "mobile app",
        imageUrl: "/images/projectImages/studentstudio.jpeg",
        projectUrl: "https://github.com/theDALEX/StudentStudio_FutureMeHackathonApp.git",
        tags: ["React Native", "Expo", "AI"]
    },
    {
        id: 6,
        title: "Quantized LLMs on Hugging Face",
        description: "I've been quantizing and uploading large language models to Hugging Face, making powerful models more accessible by reducing their size without significant quality loss. Check out my collection of quantized models.",
        category: "web",
        imageUrl: null,
        projectUrl: "https://huggingface.co/thedalex",
        tags: ["LLMs", "Quantization", "AI", "Hugging Face"]
    },
    {
        id: 5,
        title: "Projectstormer AI",
        description: "A web platform that sparks creativity and empowers users to generate impactful project ideas. Designed for students and professionals — bridges the gap between brainstorming and execution.",
        category: "web",
        imageUrl: "/images/projectImages/projectstromerai.jpeg",
        projectUrl: "https://github.com/theDALEX/ProjectstormerAi.git",
        tags: ["Next.js", "Google Gemini", "Vercel", "AI"]
    }
];

if (typeof module !== 'undefined' && module.exports) module.exports = projectsData;