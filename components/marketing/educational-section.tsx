import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

interface EducationalSectionProps {
  title: string;
  paragraphs: string[];
}

export function EducationalSection({ title, paragraphs }: EducationalSectionProps) {
  return (
    <SectionContainer className="bg-canvas">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="Insurance 101" title={title} className="mb-0" />
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[0.95rem] leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
