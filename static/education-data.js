// Education & Knowledge Base Data
const educationData = [
    {
        id: 1,
        institution: "Manchester Metropolitan University / Science and engineering enrichment  Rise programe",
        program: "Future Leaders Pathway",
        date: "2024 - Present",
        //description: "Part of university learning residency program focused on leadership development and innovation.",
        type: "program"
    },
    {
        id: 2,
        institution: "Manchester Metropolitan University",
        degree: "BSc (Hons) Computer Science",
        date: "2024 - Present",
        grade: "First-Class Honours (Year 1)",
        type: "degree"
    },
    {
        id: 2,
        institution: "Manchester Metropolitan University",
        degree: "Foundation in Computing and Mathematics",
        date: "2023 - 2024",
        grade: "First-Class Honours",
        logo: "/images/MMU-LOGO.webp",
        type: "foundation"
    },
    {
        id: 4,
        institution: "Bhartiya Vidya Bhavan's Vidya Mandir",
        degree: "Higher Secondary Education / Bio-Ip",
        date: "2020 - 2022",
        type: "school"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationData;
}
