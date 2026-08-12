import { Accordion } from "@/components/ui/accordion";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/shared/json-ld";
import { faqJsonLd } from "@/lib/seo/json-ld";

interface FaqSectionItem {
  id?: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqSectionItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  description,
}: FaqSectionProps) {
  if (items.length === 0) return null;

  const normalized = items.map((item, index) => ({
    id: item.id ?? `faq-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <SectionContainer>
      <JsonLd data={faqJsonLd(normalized)} />
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mx-auto max-w-3xl">
        <Accordion items={normalized} />
      </div>
    </SectionContainer>
  );
}
