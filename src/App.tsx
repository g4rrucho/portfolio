import Header from '@components/Header';
import Hero from '@components/Hero';
import About from '@components/About';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Contact from '@components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
