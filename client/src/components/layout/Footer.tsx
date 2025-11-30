import { Link } from "wouter";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { companyInfo, services } from "@shared/schema";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" data-testid="link-footer-logo">
              <span className="font-heading font-bold text-xl">
                White Wall <span className="text-primary">Renovation</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming houses into homes across Ontario. Quality craftsmanship, 
              personalized service, and results that exceed expectations.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`link-footer-service-${service.id}`}
                    >
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">{companyInfo.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm break-all">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm">{companyInfo.hours}</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
