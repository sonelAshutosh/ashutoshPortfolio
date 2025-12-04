import Image from "next/image";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { personalInfo } from "@/lib/data/personal";

export function AboutSection() {
  return (
    <SectionContainer id="about" background="muted">
      <SectionHeader
        subtitle="Get to know me"
        title="About Me"
        description="Passionate about building innovative solutions and continuous learning"
        centered
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10" />
            <Image
              src="/images/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {personalInfo.currentStatus.position}
            </h3>
            <p className="text-lg text-primary font-medium">
              {personalInfo.currentStatus.organization}
            </p>
            <p className="text-muted-foreground">
              {personalInfo.currentStatus.period}
            </p>
          </div>

          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>{personalInfo.bio.long}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {personalInfo.stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <p className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
