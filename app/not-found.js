"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg">
              <Home className="h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            If you think this is a mistake, please{" "}
            <Link href="/#contact" className="text-primary hover:underline">
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
