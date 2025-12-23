import CONTACTS from "@/constants/contacts";
import { cn } from "@/lib/utils";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="max-w-3xl mx-auto gap-3 flex flex-col">
          {CONTACTS.map(({ href, icon, iconColor, name, value }, index) => {
            const Icon = icon;

            return (
              <a
                key={index}
                href={href}
                target={name !== "Email" ? "_blank" : undefined}
                rel={name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-6 rounded-lg shadow-lg hover:shadow-xl bg-background transition-all duration-300 hover:scale-105"
              >
                <Icon className={cn("w-8 h-8", iconColor)} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
