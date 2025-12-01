import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
      aria-label="Page header"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        role="img"
        aria-label={title}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center pt-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
