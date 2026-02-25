import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import WorkExperience from "@/components/sections/WorkExperience";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
