import Link from 'next/link'
import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Who this policy covers',
    body: `Visitors to ${SITE_CONFIG.name}, readers of syndicated and guest-authored posts, and anyone who emails the distribution or editorial desks. This policy complements our guest publishing and outreach practices.`,
  },
  {
    title: 'Information we collect',
    body: 'When you contact us, we receive the contents of your message, your email address, and technical metadata needed to deliver mail (e.g. routing headers). When you browse the site, standard server and analytics logs may include approximate location, device type, and pages viewed—used to secure the service and understand readership at an aggregate level.',
  },
  {
    title: 'Guest posts, syndication & third parties',
    body: 'Published pieces may include bylines, outbound links, and disclosure statements supplied by authors or partners. Syndication partners who republish our content are responsible for their own privacy practices on their properties. We do not sell personal data from submission emails for unrelated marketing.',
  },
  {
    title: 'Cookies & similar technologies',
    body: 'We may use cookies or local storage for essential site operation, preferences (such as theme where applicable), and limited measurement. See our cookies notice for categories and controls where offered.',
  },
  {
    title: 'Retention',
    body: 'Correspondence and submission records are kept only as long as needed to fulfil your request, manage syndication agreements, or meet legal obligations—then deleted or anonymized where feasible.',
  },
  {
    title: 'Your rights & choices',
    body: 'Depending on your region, you may have rights to access, correct, delete, or restrict certain processing of your personal information. Contact us with the subject “Privacy request” and we will verify and respond within applicable timelines.',
  },
  {
    title: 'International transfers',
    body: 'If you contact us from outside our primary hosting region, your information may be processed where our infrastructure and partners operate. We apply appropriate safeguards consistent with applicable law.',
  },
  {
    title: 'Updates to this policy',
    body: 'We may revise this page when our practices or regulations change. Material updates will be reflected in the “Last updated” date below.',
  },
] as const

export default function PrivacyPage() {
  return (
    <DistributionPageFrame
      title="Privacy & disclosures"
      description="How we handle information for readers, guest contributors, syndication partners, and press contacts across this distribution-focused site."
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-6 border border-[#f5c6c6] bg-[#fcecec] px-5 py-4 text-sm leading-relaxed text-[#7f1d1d]">
        <strong>Summary:</strong> We collect only what we need to run the publication, respond to outreach, and protect
        the platform. Guest and syndicated content may include third-party links or disclosures supplied by authors—we
        do not control partner sites.
      </div>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-neutral-200 pb-8 last:border-0">
            <h2 className="text-lg font-semibold text-neutral-900">{section.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-neutral-600">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-neutral-700">
        <p className="font-semibold text-neutral-900">Related</p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-neutral-600">
          <li>
            <Link href="/terms" className="text-[#6b0000] hover:underline">
              Terms of service & editorial guidelines
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-[#6b0000] hover:underline">
              Cookie notice
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#6b0000] hover:underline">
              Contact the distribution desk
            </Link>
          </li>
        </ul>
      </div>
    </DistributionPageFrame>
  )
}
