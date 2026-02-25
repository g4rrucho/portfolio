import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer - Frontend",
    company: "Tillster",
    period: "Nov 2023 – Feb 2025",
    description: [
      "Led frontend efforts across multiple client projects as Tenant Lead, collaborating with PMs/POs",
      "Built new features with React, React Native, TypeScript, and Tamagui",
      "Conducted code reviews, mentored developers, and managed agile delivery (SCRUM/Kanban)",
    ],
    technologies: ["React", "React Native", "TypeScript", "Tamagui"],
  },
  {
    role: "Software Developer",
    company: "Broadvoice",
    period: "Jun 2023 – Nov 2023",
    description: [
      "Built React components for a large-scale UI rebranding",
      "Ensured backwards compatibility with legacy features & DTOs",
      "Gained first professional experience with NestJS",
      "Performed code reviews and contributed to agile sprints & retrospectives",
    ],
    technologies: ["React", "NestJS", "TypeScript"],
  },
  {
    role: "Junior Software Engineer → Software Engineer - Frontend",
    company: "Tillster",
    period: "Feb 2022 – Jun 2023",
    description: [
      "Developed and maintained apps with AngularJS, Ionic, Cordova, SCSS, HTML5",
      "Delivered new features and bug fixes for multiple clients",
      "Created a reusable feature for Subway Kuwait, later adopted by other tenants",
      "Contributed to Google Play and Apple App Store releases",
      "Worked in agile teams, learning SCRUM practices",
    ],
    technologies: ["AngularJS", "Ionic", "Cordova", "SCSS", "HTML5"],
  },
  {
    role: "Software Engineer",
    company: "TRJ",
    period: "Oct 2021",
    description: ["Built an invoice parser in C++, CIUS-PT Standard compliant"],
    technologies: ["C++"],
  },
  {
    role: "Fullstack Web Developer",
    company: "TRJ",
    period: "Aug 2019 – Jan 2020",
    description: [
      "Project lead of accounting platform in PEAN stack (PostgreSQL, Express, Angular & Node.js)",
    ],
    technologies: ["PostgreSQL", "Express", "Angular", "Node.js"],
  },
];

const ExperienceCard: React.FC<Experience> = ({
  role,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <Card className="relative">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {role}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {period}
          </span>
        </div>

        <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
          {company}
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
