'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const distributionFaqs = [
  {
    id: 'guest-1',
    question: 'How do I submit a guest post or syndicated article?',
    answer:
      'Email the distribution desk with your headline, deck summary, target audience, and any disclosure requirements (sponsored, affiliate, or partner content). We reply with fit feedback and next steps—typically within a few business days.',
  },
  {
    id: 'guest-2',
    question: 'What editorial standards apply to syndicated pieces?',
    answer:
      'We expect original or properly licensed copy, clear bylines, accurate claims, and visible disclosures where required. Promotional posts must read like editorial with transparent sponsorship notes.',
  },
  {
    id: 'guest-3',
    question: 'Can we republish your posts on our outlet?',
    answer:
      'Republishing is handled case-by-case. Share your outlet, audience size, canonical link policy, and how you credit the original desk. Syndication terms may include link-back and no-edit clauses for sensitive announcements.',
  },
  {
    id: 'guest-4',
    question: 'How does search across the archive work?',
    answer:
      'Use Search the archive from the header or footer. Queries match titles, summaries, tags, and body text. Narrow results by starting from the Guest posts index if you need chronological context.',
  },
  {
    id: 'guest-5',
    question: 'Where do I report a correction or takedown request?',
    answer:
      'Use Contact & submissions with “Correction” or “Takedown” in the subject line. Include the URL, the inaccurate passage, and your authority to request the change. We prioritize factual and legal issues.',
  },
] as const

export function HelpFaqPanel() {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
      {distributionFaqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-neutral-200">
          <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:text-[#6b0000] hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-neutral-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
