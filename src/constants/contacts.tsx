import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

const CONTACTS = [
  {
    name: "Email",
    value: "guilhermegarrucho@gmail.com",
    href: "mailto:guilhermegarrucho@gmail.com",
    icon: Mail,
    iconColor: "text-[#181717] dark:text-white",
  },
  {
    name: "GitHub",
    value: "github.com/g4rrucho",
    href: "https://github.com/g4rrucho",
    icon: SiGithub,
    iconColor: "text-[#181717] dark:text-white",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/g4rrucho",
    href: "https://linkedin.com/in/g4rrucho",
    icon: LinkedInIcon,
    iconColor: "text-[#0A66C2]",
  },
];

export default CONTACTS;
