import Link from 'next/link'
import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Agreement to these terms',
    body: `By accessing ${SITE_CONFIG.name}, reading our posts, submitting material for publication or syndication, or contacting our desks, you agree to these Terms of Service and our Privacy & disclosures. If you do not agree, do not use the site or send submissions.`,
  },
  {
    title: 'Nature of the service',
    body: `${SITE_CONFIG.name} operates as a media distribution and guest publishing surface. We may publish editorial content, guest posts, announcements, and syndicated material. We do not guarantee placement, timing, or pickup by third-party outlets unless separately agreed in writing.`,
  },
  {
    title: 'Submissions & guest posts',
    body: 'When you email or otherwise submit content for consideration, you represent that you have the rights to grant publication, that the work is accurate to the best of your knowledge, and that promotional or sponsored material is clearly disclosed. We may reject, edit for clarity or length, or delay publication for editorial, legal, or operational reasons.',
  },
  {
    title: 'License you grant us',
    body: 'For accepted submissions, you grant us a non-exclusive, worldwide, royalty-free license to host, reproduce, distribute, promote, and syndicate the work (including excerpts and headlines) in connection with the site and agreed partner channels, unless we specify a narrower license in writing.',
  },
  {
    title: 'Syndication & third parties',
    body: 'Where we coordinate republication or syndication, partner sites operate under their own terms. We are not responsible for partner delays, edits, or removals. You remain responsible for claims arising from content you supply.',
  },
  {
    title: 'Acceptable use',
    body: 'You may not use the site or our contact channels to transmit malware, scrape the site in a way that degrades service, impersonate others, harass staff or contributors, or distribute unlawful, defamatory, or infringing material. We may block or filter abusive traffic.',
  },
  {
    title: 'Intellectual property',
    body: 'The site layout, branding, and original non-submitted materials are owned by us or our licensors. Trademarks and third-party names appearing in posts are property of their respective owners. Unauthorised reproduction of the site shell or our marks is not permitted.',
  },
  {
    title: 'Disclaimers',
    body: 'Posts are provided for general information and distribution purposes. Nothing on the site constitutes professional, financial, or legal advice. We disclaim warranties to the fullest extent permitted by law and do not warrant uninterrupted or error-free operation.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the maximum extent permitted by law, we and our contributors will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of the site or reliance on published content.',
  },
  {
    title: 'Indemnity',
    body: 'You agree to defend and indemnify us against claims, damages, and expenses (including reasonable legal fees) arising from your submissions, your breach of these terms, or your misuse of the site—except to the extent caused by our gross negligence or wilful misconduct.',
  },
  {
    title: 'Changes',
    body: 'We may update these terms from time to time. The “Last updated” date below will change when we do. Continued use of the site after changes constitutes acceptance of the revised terms for new activity; material changes affecting submissions may be highlighted on this page or via the distribution desk.',
  },
  {
    title: 'Governing law & disputes',
    body: 'These terms are governed by the laws applicable to our operating jurisdiction, without regard to conflict-of-law rules. Courts in that jurisdiction have exclusive venue for disputes arising from these terms or the site, unless mandatory consumer protections in your region say otherwise.',
  },
  {
    title: 'Contact',
    body: 'For questions about these terms, contact the distribution desk via the contact page. For privacy-specific requests, follow the instructions on our Privacy & disclosures page.',
  },
] as const

export default function TermsPage() {
  return (
    <DistributionPageFrame
      title="Terms of service"
      description={`Rules and guidelines for using ${SITE_CONFIG.name}, submitting guest posts, and working with our media distribution desk.`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-6 border border-[#f5c6c6] bg-[#fcecec] px-5 py-4 text-sm leading-relaxed text-[#7f1d1d]">
        <strong>Reader notice:</strong> Guest and syndicated posts may include links, disclosures, or opinions from third
        parties. Always verify facts that matter to you, especially for financial, legal, or medical decisions.
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
            <Link href="/privacy" className="text-[#6b0000] hover:underline">
              Privacy & disclosures
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-[#6b0000] hover:underline">
              Cookie notice
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#6b0000] hover:underline">
              Submit for distribution / contact
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-[#6b0000] hover:underline">
              Help & support
            </Link>
          </li>
        </ul>
      </div>
    </DistributionPageFrame>
  )
}
