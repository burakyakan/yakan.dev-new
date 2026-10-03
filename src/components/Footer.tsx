import Link from "next/link";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



function Footer() {

  const currentYear = new Date().getFullYear();

  const linkClasses = "";



  return (
    <footer className="flex flex-row text-center justify-center bg-amber-600 w-3/4">
      <div>
        <p className="flex flex-row">&copy; {currentYear} Burak Yakan. All rights reserved.</p>

        <div className="flex flex-row items-center">
          <a className={linkClasses} href="mailto:burak@yakan.dev" rel="noopener noreferrer" target="_blank" aria-label="Mail"><Mail height={24} width={24} /></a>
          <a className={linkClasses} href="https://www.linkedin.com/in/burakyakan" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className={linkClasses} href="https://github.com/burakyakan" rel="noopener noreferrer" target="_blank" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;