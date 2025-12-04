import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { experienceData } from "@/lib/data/experience";

function ExperienceCard({ experience, isLast }) {
  return (
    <div className="relative pl-8 pb-12">
      <div className="absolute left-0 top-0 w-px h-full bg-border">
        {!isLast && <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />}
      </div>

      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="group">
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-hover">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experience.role}
              </h3>
              <p className="text-lg text-primary font-medium mb-2">
                {experience.company}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {experience.duration}
                </span>
                <Badge variant="outline">{experience.type}</Badge>
              </div>
            </div>
          </div>

          <p className="text-foreground/90 mb-4">{experience.description}</p>

          <div className="space-y-3 mb-4">
            <h4 className="font-medium text-foreground flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm text-foreground/80 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <Badge key={index} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" background="muted">
      <SectionHeader
        subtitle="My Journey"
        title="Work Experience"
        description="Professional experience and contributions across various organizations"
        centered
      />

      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
