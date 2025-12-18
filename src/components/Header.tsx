import { useState, useEffect, useCallback } from "react";
import { Contact, FileStack, Home, Menu, User, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FileStack },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "contact", label: "Contact", icon: Contact },
];

type DesktopNavProps = { scrollToSection: (sectionId: string) => void };

const DesktopNav: React.FC<DesktopNavProps> = ({ scrollToSection }) => (
  <div>
    <ul className="hidden md:flex space-x-8">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => scrollToSection(item.id)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

type MobileNavProps = { scrollToSection: (sectionId: string) => void };

const MobileNav: React.FC<MobileNavProps> = ({ scrollToSection }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const onNavItemPress = useCallback(
    (id: string) => {
      scrollToSection(id);
      setIsSheetOpen(false);
    },
    [scrollToSection]
  );

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Menu size={20} />
      </SheetTrigger>
      <SheetContent side="right" className="dark:bg-gray-900/99 w-72">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <div className="flex flex-col gap-4 p-4">
          {NAV_ITEMS.map(({ icon, id, label }) => {
            const Icon = icon;
            return (
              <div className="" key={id}>
                <Button
                  variant="ghost"
                  onClick={() => onNavItemPress(id)}
                  className="text-left w-full text-lg font-medium hover:bg-accent transition-colors active:bg-primary/30"
                >
                  <Icon />
                  <span className="w-full">{label}</span>
                </Button>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {isScrolled ? (
            <Button
              onClick={() => scrollToSection("hero")}
              variant="link"
              className="text-xl transition-all h-10 w-10 duration-300 font-bold hover:no-underline"
            >
              <Home className="h-6 w-6 dark:text-white" />
            </Button>
          ) : (
            <div className="h-10 w-10"></div>
          )}

          <DesktopNav scrollToSection={scrollToSection} />
          <MobileNav scrollToSection={scrollToSection} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
