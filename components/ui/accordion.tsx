"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/tracking/analytics";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  const panelId = `accordion-panel-${id}`;
  const buttonId = `accordion-button-${id}`;

  const handleToggle = () => {
    if (!isOpen) trackEvent({ name: "faq_expand", question });
    onToggle(id);
  };

  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={handleToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-base text-navy-950 sm:text-lg">{question}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-5 w-5 shrink-0 text-navy-500 transition-transform duration-300",
              isOpen && "rotate-180 text-emerald-700"
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-ink-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={cn("divide-y divide-border rounded-2xl border border-border bg-surface px-6", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openId === item.id}
          onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
        />
      ))}
    </div>
  );
}
