import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm a passionate Software Engineer with a strong foundation in
              modern web technologies. My journey in software development began
              with a curiosity about how things work under the hood, which led
              me to explore both frontend and backend development and landed me
              my first role designing an entire accounting application from the
              ground up.
            </p>

            <p className="text-lg">
              I specialize in building scalable web applications using React,
              React Native, TypeScript, and Node.js. On the frontend, I focus on
              creating intuitive user interfaces with attention to detail and
              performance. On the backend, I work with NestJS and various
              databases to build robust APIs and services.
            </p>

            <p className="text-lg">
              Beyond web development, I have a solid understanding of data
              structures and algorithms, having implemented various structures
              in JavaScript and C, including Binary Search Trees, HashMaps, and
              Priority Queues. This foundation in both high-level and low-level
              programming helps me write efficient, well-optimized code.
            </p>

            <p className="text-lg">
              I'm also experienced with DevOps practices, using Docker for
              containerization and AWS EC2 for deployment, since I've
            </p>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What I'm interested in:
              </h3>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="text-blue-500 dark:text-blue-400 mr-2" />
                  <span>Building performant, accessible mobile & web applications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-blue-500 dark:text-blue-400 mr-2" />
                  <span>
                    Learning new technologies and staying current with industry
                    trends
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-blue-500 dark:text-blue-400 mr-2" />
                  <span>Exploring system design and scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-blue-500 dark:text-blue-400 mr-2" />
                  <span>Contributing to open source projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
