import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SEO } from "@/components/SEO";
import { companyInfo } from "@shared/schema";

import heroImage from "@assets/generated_images/luxury_bathroom_renovation.png";
import officeImage from "@assets/generated_images/modern_kitchen_renovation.png";

export default function Contact() {
  return (
    <main id="main-content">
      <SEO
        title="Contact Us | White Wall Renovation - Get Your Free Quote"
        description="Ready to transform your home? Contact White Wall Renovation for a free consultation and quote. Call (519) 731-6242 or fill out our contact form today."
        path="/contact"
      />
      <PageHero
        title="Contact White Wall Renovation"
        subtitle="Ready to Transform Your Home? Let's Get in Touch!"
        backgroundImage={heroImage}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-16 md:py-24 bg-background" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Get In Touch
              </span>
              <h2
                id="contact-heading"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
              >
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Interested in working together? Fill out some info and we will be in 
                touch shortly! We can't wait to hear from you!
              </p>

              <ContactForm showCard={false} />
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <img
                  src={officeImage}
                  alt="White Wall Renovation office"
                  className="w-full rounded-lg aspect-video object-cover"
                />

                <Card className="border border-border">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-4">
                        Contact Information
                      </h3>

                      <div className="space-y-4">
                        <a
                          href={`tel:${companyInfo.phone}`}
                          className="flex items-start gap-4 text-foreground hover:text-primary transition-colors group"
                          data-testid="link-contact-phone"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium">{companyInfo.phoneFormatted}</p>
                          </div>
                        </a>

                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="flex items-start gap-4 text-foreground hover:text-primary transition-colors"
                          data-testid="link-contact-email"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium break-all">{companyInfo.email}</p>
                          </div>
                        </a>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Hours</p>
                            <p className="font-medium">{companyInfo.hours}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{companyInfo.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold mb-3">
                        Consult the services you need now!
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Thank you for considering White Wall Renovation for your house 
                        transformation needs. Whether you have a specific project in mind 
                        or simply want to explore the possibilities, our team is here to 
                        assist you.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">
                        Serving Ontario, Canada
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        Contact us for service availability in your area
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary" aria-labelledby="connect-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2
            id="connect-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4"
          >
            Connect with White Wall Renovation
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Stay connected with us for the latest updates, project showcases, and 
            home improvement tips. We're always here to help with your renovation needs.
          </p>
        </div>
      </section>
    </main>
  );
}
