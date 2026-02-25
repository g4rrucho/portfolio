export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  upcoming?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "FitGram",
    description:
      "A comprehensive fitness tracking cross-platform application that helps personal trainers manage their clients' workouts, track progress, and stay motivated. Features user authentication, workout logging, and email notifications via Resend service.",
    technologies: [
      "React",
      "Expo",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "Resend",
      "AWS",
      "Docker",
    ],
    upcoming: true,
  },
  {
    title: "Pokémon Pokédex",
    description:
      "An interactive Pokédex built as a frontend challenge. Browse through Pokémon, view detailed information, and explore different generations, featuring responsive design.",
    technologies: ["Vite", "React", "TypeScript", "REST API"],
    githubUrl: "https://github.com/g4rrucho/pokedex",
    liveUrl: "https://g4rrucho.github.io/pokedex/",
  },
];

export default PROJECTS;
