import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { educationData } from "@/lib/data/education";

function EducationCard({ education }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

      <div className="relative p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <GraduationCap className="h-7 w-7" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {education.degree}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {education.field}
                </p>
              </div>
              {education.status === "Current" && (
                <Badge variant="success">Current</Badge>
              )}
            </div>

            <p className="text-lg font-medium text-foreground mb-3">
              {education.institution}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {education.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {education.period}
              </span>
            </div>

            <p className="text-foreground/80 mb-4">{education.description}</p>

            {education.coursework && education.coursework.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge key={index} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {education.achievements && education.achievements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Highlights</h4>
                <ul className="space-y-1">
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-sm text-foreground/80 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function EducationSection() {
  return (
    <SectionContainer id="education" background="muted">
      <SectionHeader
        subtitle="Academic Background"
        title="Education"
        description="Continuous learning and academic achievements"
        centered
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </SectionContainer>
  );
}
