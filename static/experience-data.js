// Work Experience Data
const experienceData = [
    {
        id: 1,
        company: "FreeFlush Water Management",
        role: "R&D Software Developer",
        date: "2024 - Present",
        description: "Transitioned from an internship to a part-time role building IoT-cloud integrations and modern applications. Designed and implemented a water waste monitoring system using AWS IoT Core, API Gateway, and Lambda. Developed Next.js dashboards and React Native (Expo) mobile apps integrating AWS and Appwrite services.",
        tags: ["AWS IoT Core", "Next.js", "React Native", "Appwrite", "Docker", "AWS"]
    },
    {
        id: 2,
        company: "FreeFlush Water Management",
        role: "R&D Software Developer Internship",
        date: "2024",
        description: "Completed a 3-month internship contributing to the development of their new production software. Part of the core team responsible for building the device ecosystem from the ground up spanning hardware integration, software architecture, and early-stage testing.",
        tags: ["AWS IoT Core", "Next.js", "React Native", "Appwrite", "Docker", "AWS"]
    },
    {
        id: 3,
        company: "Manchester Metropolitan University",
        role: "Department of Computing & Mathematics, Lab Demonstrator",
        date: "2024 - Present",
        description: "Support undergraduate students in programming labs debugging code, explaining concepts, and promoting best software development practices. Mentor students across Python, Java, Computer Architecture, Databases and web development modules.",
        tags: ["Python", "Java", "SQL", "Computer architecture", "RISC-V", "Web Dev", "Mentoring"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = experienceData;
}
