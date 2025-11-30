import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@shared/schema";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
        >
          <AccordionTrigger
            className="text-left font-heading font-semibold text-base md:text-lg py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180"
            data-testid={`accordion-trigger-${index}`}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
