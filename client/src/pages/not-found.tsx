import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center bg-background pt-20"
    >
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-8xl font-heading font-bold text-primary/20">404</span>
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" data-testid="button-home">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
}
