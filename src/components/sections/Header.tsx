import { useState, useEffect } from "react";
import { Briefcase, Contact, Layers, User } from "lucide-react";
import { Link } from "@radix-ui/react-navigation-menu";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import type { IconComponent } from "@/types/icon";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "work-experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Contact },
];

type HeaderNavLinkProps = {
  href: string;
  icon: IconComponent;
  target?: string;
  rel?: string;
};

const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({
  href,
  icon: IconComponent,
  ...props
}) => {
  return (
    <a href={href} className="hover:text-gray-400" {...props}>
      <IconComponent />
    </a>
  );
};

const HEADER_SOCIAL_LINKS = [
  {
    href: "https://github.com/g4rrucho",
    icon: SiGithub,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "https://linkedin.com/in/g4rrucho",
    icon: LinkedInIcon,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...NAV_ITEMS.map((item) => item.id)];
      let currentSection = "hero";

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "flex items-center justify-center sm:justify-between sm:px-12 md:px-24  h-16",
      )}
    >
      <div className="h-10 w-10 hidden sm:block" />
      <NavigationMenu className="rounded-2xl bg-background border px-1 py-1">
        <NavigationMenuList className="gap-2">
          {NAV_ITEMS.map(({ id, icon, label }) => {
            const Icon = icon;
            const isActive = activeSection === id;

            return (
              <NavigationMenuItem key={`${label}-${id}`}>
                <NavigationMenuLink
                  className={cn(
                    "flex flex-row items-center gap-2 rounded-xl px-3 transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground pr-4"
                      : "hover:bg-accent sm:pr-4",
                  )}
                  asChild
                >
                  <Link href={`#${id}`}>
                    <Icon color={isActive ? "white" : "currentColor"} />
                    <span
                      className={cn(
                        "overflow-hidden transition-all duration-300 sm:max-w-24 sm:opacity-100",
                        isActive ? "max-w-24 opacity-100" : "max-w-0 opacity-0",
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div
        className={cn(
          "p-2 px-3 rounded-xl border border-transparent hidden sm:block",
          isScrolled && "bg-background border-gray-200 dark:border-gray-800",
        )}
      >
        <div className="flex flex-row gap-4 ">
          {HEADER_SOCIAL_LINKS.map(({ href, icon, rel, target }) => (
            <HeaderNavLink
              key={href}
              rel={rel}
              target={target}
              href={href}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
