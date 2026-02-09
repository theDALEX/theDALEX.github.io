// Projects Data
const projectsData = [
    {
        id: 1,
        title: "AWS Breaking Barriers Challenge, 2026",
        description: "Our product was Ally, a partner app for Ukind charity for there VR headsets. This is the presentation that advanced to the final round representing Manchester.",
        category: "video",
        featured: true,
        videoUrl: "/videos/AWS_hackathon_files/AWS_hackathon.mp4",
        videoPoster: "/videos/AWS_hackathon_files/AWS_hackathon_preview.png",
        tags: ["AWS", "Software Development", "Hackathon finalist"]
    },
    {
        id: 2,
        title: "Asphira",
        description: "Asphira is a location based mobile app that analyzes real crime data to generate clear, reliable safety scores for any area. It helps you understand how safe a place is before you travel, commute, or explore, and it also suggests practical safety measures based on the risk level of your destination.",
        category: "mobile app",
        imageUrl: "/images/projectImages/asphira.jpeg",
        projectUrl: "https://github.com/theDALEX/Asphira.git",
        tags: ["React Native", "TypeScript", "Personal Safety app"]
    },
    {
        id: 3,
        title: "Common wealth games +",
        description: "This app was created as part of the Big Science Tech Fest challenge 2026 at Manchester Metropolitan University. The challenge focused on improving engagement with the Commonwealth Games, and our team won the Tech Fest with this app",
        category: "mobile app",
        imageUrl: "/images/projectImages/commonwealthgamesapp.jpeg",
        projectUrl: "https://github.com/theDALEX/Common_wealth_games_plus_app.git",
        tags: ["React Native", "Expo"]
    },
    {
        id: 4,
        title: "Student Studio",
        description: "Student Studio was an idea formed during a hackathon jam. We gathered and analysed key student issues, We then brainstormed ways to address these issues and discovered that a hyper personalised app with integrated AI would be the most effective way to solve them.",
        category: "mobile app",
        imageUrl: "/images/projectImages/studentstudio.jpeg",
        projectUrl: "https://github.com/theDALEX/StudentStudio_FutureMeHackathonApp.git",
        tags: ["React Native", "Expo", "AI"]
    },
    {
        id: 5,
        title: "Projectstormer AI",
        description: "ProjectstormerAi is a web platform that sparks creativity and empowers users to generate impactful project ideas. Designed for students and professionals, it bridges the gap between brainstorming and execution, offering tailored solutions across diverse fields and disciplines.",
        category: "web",
        imageUrl: "/images/projectImages/projectstromerai.jpeg",
        projectUrl: "https://github.com/theDALEX/ProjectstormerAi.git",
        tags: ["Next.js", "Google cloud/gemini", "Vercel", "AI"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
