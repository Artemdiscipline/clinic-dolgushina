'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/data/site';

export function Faq() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="section-intro">
        <p className="eyebrow">Вопросы</p>
        <h2 id="faq-title">Перед первым визитом</h2>
      </div>
      <Accordion className="faq-list">
        {faq.map((item) => (
          <AccordionItem className="faq-item" key={item.question}>
            <AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger>
            <AccordionContent className="faq-content">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
