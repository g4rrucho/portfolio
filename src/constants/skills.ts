type SkillCategory = {
  category: string;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Vite",
      "Expo",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "Fastify",
      "Express",
      "REST APIs",
      "Microservices",
      "Authentication",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostreSQL", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Docker",
      "Docker Compose",
      "AWS (EC2, EKS, ECR, S3, ...)",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C", "C++"],
  },
  {
    category: "Other",
    skills: [
      "Data Structures & Algorithms",
      "System Design Architecture",
      "SCRUM Methodologies",
      "Agile Development",
    ],
  },
];

export default SKILL_CATEGORIES;
