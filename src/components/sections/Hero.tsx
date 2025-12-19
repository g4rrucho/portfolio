import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 bg-background"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">
            <span>Hello, I'm </span>
            <span className="text-blue-600 dark:text-blue-400">
              Guilherme Garrucho
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Software Engineer
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400  leading-relaxed">
            Building modern web & mobile applications with a focus on clean
            code, scalability, and user experience.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Passionate about creating efficient solutions using cutting-edge
            technologies.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="px-8 py-5"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              className="px-8 py-5"
              variant={"outline"}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
