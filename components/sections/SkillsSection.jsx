"use client";

import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiDocker,
  SiOpenai,
  SiAxios,
  SiArduino,
  SiRaspberrypi,
  SiAutodesk,
  SiBlender,
} from "react-icons/si";
import { Code, Layout, Server, Terminal, FileCode } from "lucide-react";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { skillsData } from "@/lib/data/skills";

const iconMap = {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiJava: SiJavascript, // Java icon doesn't exist, using JavaScript as fallback
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiGit,
  SiGithub,
  SiLinux,
  SiVisualstudiocode: FileCode, // VSCode icon doesn't exist in simple-icons, using Lucide
  SiPostman,
  SiDocker,
  SiOpenai,
  SiAxios,
  SiArduino,
  SiRaspberrypi,
  SiPrusaslicer: SiBlender, // Prusa icon doesn't exist, using Blender for 3D printing
  SiAutodesk,
};

const categoryIcons = {
  code: Code,
  layout: Layout,
  server: Server,
  terminal: Terminal,
};

function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code;

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-vibrant/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-card border border-border rounded-lg p-2.5 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/10 to-vibrant/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-vibrant/20 transition-all duration-300 flex-shrink-0">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {skill.name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills, icon: iconName, description }) {
  const Icon = categoryIcons[iconName] || Code;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-vibrant flex items-center justify-center shadow-md shadow-primary/20">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <SectionContainer id="skills" background="muted" className="py-12">
      <SectionHeader
        subtitle="What I bring to the table"
        title="Skills & Technologies"
        description="A comprehensive toolkit for building modern web applications"
        centered
      />

      <div className="max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCategory
            title="Programming Languages"
            description="Core languages I work with"
            skills={skillsData.languages}
            icon="code"
          />
          <SkillCategory
            title="Frontend Development"
            description="Building beautiful user interfaces"
            skills={skillsData.frontend}
            icon="layout"
          />
          <SkillCategory
            title="Backend & Database"
            description="Server-side architecture"
            skills={skillsData.backend}
            icon="server"
          />
          <SkillCategory
            title="Tools & More"
            description="Development tools and expertise"
            skills={[...skillsData.tools, ...skillsData.other]}
            icon="terminal"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
