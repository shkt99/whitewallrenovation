"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { companyInfo } from "@/lib/schema";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-logo" onClick={handleHomeClick} className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="White Wall Renovation Logo"
              width={140}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? handleHomeClick : undefined}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? isScrolled
                      ? "bg-primary/10 text-primary"
                      : "bg-white/20 text-white"
                    : isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden md:flex items-center gap-2"
              data-testid="link-phone-header"
            >
              <Button
                variant={isScrolled ? "default" : "secondary"}
                size="sm"
                className={
                  !isScrolled
                    ? "bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                    : ""
                }
              >
                <Phone className="w-4 h-4 mr-1" />
                {companyInfo.phoneFormatted}
              </Button>
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "" : "text-white hover:bg-white/10"}
                  aria-label="Open menu"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-6 border-b">
                    <span className="font-heading font-bold text-xl">
                      White Wall{" "}
                      <span className="text-primary">Renovation</span>
                    </span>
                  </div>

                  <nav
                    className="flex flex-col gap-1 py-6"
                    aria-label="Mobile navigation"
                  >
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                            pathname === link.href
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80 hover:text-foreground hover:bg-muted"
                          }`}
                          data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t space-y-4">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium"
                      data-testid="link-phone-mobile"
                    >
                      <Phone className="w-5 h-5" />
                      Call {companyInfo.phoneFormatted}
                    </a>
                    <p className="text-sm text-muted-foreground px-4">
                      {companyInfo.hours}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
