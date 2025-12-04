"use client";

import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data/personal";

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Ashutosh_Sonel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-slide-up">
            <p className="text-primary font-semibold text-lg uppercase tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight relative">
              <span className="gradient-text relative inline-block">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/50 via-vibrant/50 to-primary/50 animate-pulse -z-10"></span>
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-vibrant hover:from-primary/90 hover:to-vibrant/90 shadow-lg shadow-primary/25"
            >
              View My Work
              <ArrowDown className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Contact Me
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleDownloadResume}
            >
              <Download className="h-5 w-5" />
              Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8 animate-slide-up animation-delay-400">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-vibrant/10 flex items-center justify-center text-vibrant hover:bg-vibrant hover:text-vibrant-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 rounded-full bg-vibrant/10 flex items-center justify-center text-vibrant hover:bg-vibrant hover:text-vibrant-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="pt-16 animate-float">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
