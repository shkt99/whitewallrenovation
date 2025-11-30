import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Unmatched Expertise",
    description:
      "Our team boasts years of experience, transforming houses into homes. From concept to completion, we excel in delivering superior craftsmanship that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Tailored Solutions",
    description:
      "We understand that every home is unique, and so are your renovation needs. Our personalized approach ensures that your project is a true reflection of your style and preferences.",
  },
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description:
      "At White Wall Renovation, we believe in doing things right the first time. Our commitment to quality craftsmanship is evident in every detail, ensuring lasting beauty and functionality.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Your time is valuable, and we respect that. We prioritize efficient project management to ensure timely completion without compromising the excellence that defines our work.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border border-border bg-card hover:-translate-y-1 transition-all duration-300"
        >
          <CardContent className="p-6 md:p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project we undertake. From the initial design phase to the finishing touches, our team is dedicated to delivering workmanship that exceeds expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty are at the core of our business. We believe in building trust with our clients through clear communication, fair practices, and delivering on our promises.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our ultimate goal. We listen to your needs, understand your vision, and work tirelessly to ensure that the final result not only meets but surpasses your expectations.",
  },
];

export function CoreValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {coreValues.map((value, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <value.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-xl mb-2">
            {value.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}

const whyChooseReasons = [
  {
    title: "Proven Track Record",
    description:
      "With hundreds of successful projects and satisfied clients, we have established ourselves as a trusted name in the house renovation industry.",
  },
  {
    title: "Skilled Team",
    description:
      "Our team of craftsmen, designers, and project managers bring passion and expertise to every renovation. We invest in ongoing training to stay at the forefront of industry trends.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We understand that each client is unique, and so are their renovation needs. Our client-centric approach ensures that your project is tailored to your lifestyle, preferences, and budget.",
  },
  {
    title: "Timely Delivery",
    description:
      "Your time is valuable, and we respect that. We prioritize efficient project management to ensure timely completion without compromising the excellence that defines our work.",
  },
];

export function WhyChooseReasons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {whyChooseReasons.map((reason, index) => (
        <div
          key={index}
          className="flex gap-4 p-6 rounded-lg bg-muted/50 border border-border"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-1">
              {reason.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
