"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Monitor,
  Maximize2,
  Minimize2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projectsData } from "@/lib/data/projects";

function BrowserView({ project, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen ? "w-full h-full" : "max-w-7xl w-full max-h-[90vh]"
      }`}>
        {/* Browser Chrome */}
        <div className="bg-muted border-b border-border">
          {/* Window Controls */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" onClick={() => setIsFullscreen(!isFullscreen)} />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-1.5 hover:bg-accent rounded transition-colors"
                aria-label="Close"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Address Bar */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded transition-colors" disabled>
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-accent rounded transition-colors" disabled>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-accent rounded transition-colors">
                <RefreshCw className="h-4 w-4" />
              </button>
              <div className="flex-1 flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2">
                <Monitor className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground/80 truncate">
                  {project.links.live || "https://project-demo.com"}
                </span>
              </div>
              <button
                className="p-2 hover:bg-accent rounded transition-colors"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="overflow-y-auto" style={{ height: isFullscreen ? 'calc(100vh - 120px)' : '70vh' }}>
          {/* Project Preview */}
          {project.links.live ? (
            <iframe
              src={project.links.live}
              className="w-full h-full border-0"
              title={project.title}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          ) : (
            <div className="p-8 space-y-6">
              {/* Project Images Carousel */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-4">
                  {project.images.map((img, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
                  <p className="text-lg text-muted-foreground">{project.subtitle}</p>
                </div>

                <div>
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>

                {project.features && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-foreground/80 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary text-lg"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-base px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.impact && (
                  <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-lg">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-3xl font-bold text-primary">{value}</p>
                        <p className="text-sm text-muted-foreground capitalize">
                          {key.replace("_", " ")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      size="lg"
                      onClick={() => window.open(project.links.live, "_blank")}
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video bg-muted overflow-hidden">
        {project.featured && (
          <Badge className="absolute top-4 right-4 z-10" variant="success">
            Featured
          </Badge>
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-foreground/80 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline">+{project.technologies.length - 4}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails(project)}
        >
          <Monitor className="h-4 w-4" />
          View Project
        </Button>
        {project.links.github && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.links.github, "_blank")}
          >
            <Github className="h-4 w-4" />
          </Button>
        )}
        {project.links.live && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.links.live, "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Display only the first 3 projects on the homepage
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <SectionContainer id="projects">
      <SectionHeader
        subtitle="What I've Built"
        title="Featured Projects"
        description="A showcase of my work in web development and software engineering"
        centered
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <div key={project.id} className="group">
            <ProjectCard
              project={project}
              onViewDetails={setSelectedProject}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/projects">
          <Button size="lg" className="group">
            View All Projects
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {selectedProject && (
        <BrowserView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionContainer>
  );
}
