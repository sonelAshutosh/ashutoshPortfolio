import { cn } from "@/lib/utils";

export function SectionContainer({
  id,
  className,
  children,
  background = "default",
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        background === "muted" && "bg-muted/30",
        background === "accent" && "bg-accent/20",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  centered = true,
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
