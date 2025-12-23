import AwsIcon from "@/components/icons/AwsIcon";
import { Card, CardContent } from "@/components/ui/card";

import {
  SiDocker,
  SiExpo,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const TECHS = [
  { name: "React", icon: SiReact, iconColor: "#61DAFB" },
  { name: "React Native", icon: SiReact, iconColor: "#61DAFB" },
  { name: "Expo", icon: SiExpo, iconColor: "#000020" },
  { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, iconColor: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, iconColor: "#339933" },
  { name: "NestJS", icon: SiNestjs, iconColor: "#E0234E" },
  { name: "Docker", icon: SiDocker, iconColor: "#2496ED" },
  { name: "AWS", icon: AwsIcon, iconColor: "#FF9900" },
  { name: "Git", icon: SiGithub, iconColor: "#181717" },
  { name: "Linux", icon: SiLinux, iconColor: "#181717" },
  { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
  { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#336791" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center  justify-center bg-background"
    >
      <div className="container mx-auto px-6 py-20 flex-1 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center">What I Do</h1>
          <div className="flex flex-col gap-4 text-lg text-center leading-relaxed">
            <p>
              A Software Engineer with 4+ years of experience blending web &
              mobile development expertise with cutting-edge technologies. I
              build modern applications with React, React Native, and TypeScript
              on the frontend, and Node.js with NestJS on the backend.
            </p>
            <p>
              My approach combines a strong foundation in computer science
              fundamentals with practical experience in cloud infrastructure,
              containerization, and agile development methodologies.
            </p>
            <p>
              What sets me apart is my ability to see the bigger picture while
              maintaining attention to detail. Whether I'm implementing complex
              data structures, designing scalable APIs, or optimizing
              application performance, I'm driven by the challenge of turning
              intricate technical problems into elegant, user-friendly
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">Tech I Work With</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {TECHS.map(({ icon, name, iconColor }, index) => {
              const Icon = icon;

              return (
                <Card
                  className="gap-4 p-4 w-32 text-center bg-gray-100 border-gray-100 dark:bg-gray-700 dark:border-gray-700 rounded-lg shadow-none hover:-translate-y-2 transition-all duration-300"
                  key={`${name}-${index}`}
                >
                  <CardContent className="flex flex-col items-center gap-2 p-0">
                    <Icon className="w-8 h-8" color={iconColor} />
                    <p className="text-nowrap">{name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
