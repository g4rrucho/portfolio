import { useCallback } from "react";
import { Download, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center flex-col bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 bg-background"
    >
      <div className="container mx-auto px-6 py-20 flex-1 flex justify-center items-center ">
        <div className="max-w-3xl mx-auto items-center text-center gap-3 justify-center flex flex-1 flex-col">
          <h1 className="text-5xl md:text-6xl font-bold flex gap-3 flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <span>Hi!</span>
              <span>I'm</span>
            </div>
            <span> Guilherme Garrucho</span>
          </h1>

          <h4 className="flex flex-col lg:flex-row md:gap-3 text-2xl font-thin">
            <span>FullStack Software Engineer</span>
            {/* <span className="border self-stretch w-px md:my-2 bg-foreground/20 border-gray-400 hidden lg:block" />
            <span>AI Integration Specialist</span> */}
          </h4>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 mt-6 leading-relaxed">
            Building modern web & mobile applications focused on user
            experience, clean code & scalability, leveraging AI innovation.
          </p>

          <div className="flex flex-col w-80 sm:flex-row items-center gap-4 justify-center">
            <Button
              className="px-8 py-5 rounded-full"
              onClick={() => scrollToSection("projects")}
            >
              <Layers />
              View Projects
            </Button>
            <Button className="px-8 py-5 rounded-full" variant="ghost">
              <a
                className="flex gap-2 items-center"
                href="/portfolio/resume.pdf"
                download="Guilherme_Garrucho_Resume.pdf"
              >
                <Download />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
