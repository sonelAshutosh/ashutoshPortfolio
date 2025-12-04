"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { SectionContainer, SectionHeader } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { contactSchema } from "@/lib/validations/contactSchema";
import { personalInfo } from "@/lib/data/personal";

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <SectionContainer id="contact">
      <SectionHeader
        subtitle="Get In Touch"
        title="Contact Me"
        description="Let's discuss your project or just say hello"
        centered
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Let's work together
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <Card className="flex items-start gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Email</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
            </Card>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">
              {personalInfo.currentStatus.availableFor}
            </h4>
            <p className="text-muted-foreground">
              Currently pursuing {personalInfo.currentStatus.position} at{" "}
              {personalInfo.currentStatus.organization}
            </p>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                error={errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                error={errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="What's this about?"
                error={errors.subject}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                error={errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <p className="text-sm">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
                <XCircle className="h-5 w-5" />
                <p className="text-sm">
                  Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </SectionContainer>
  );
}
