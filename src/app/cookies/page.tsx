import Link from 'next/link'
import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'What this notice covers',
    body: `This Cookie notice explains how ${SITE_CONFIG.name} (“we”, “us”) uses cookies and similar technologies when you visit our website. It should be read together with our Privacy & disclosures, which describe how we handle personal information more broadly.`,
  },
  {
    title: 'What cookies and similar technologies are',
    body: 'Cookies are small text files stored on your device when you load a site. Similar technologies can include local storage, session storage, and pixels used for basic functionality or measurement. They help the site remember settings, keep sessions stable, and understand aggregate traffic.',
  },
  {
    title: 'Essential & functional',
    body: 'We use cookies and storage that are strictly necessary to deliver the site—for example routing you to the right region, keeping security and abuse-prevention signals, or remembering UI choices such as theme where that feature is enabled. These are not used for cross-site advertising.',
  },
  {
    title: 'Preferences',
    body: 'Where we offer optional preferences (such as display mode), we may store your choice in a cookie or in browser storage so the experience stays consistent on return visits. You can clear these at any time through your browser settings.',
  },
  {
    title: 'Analytics & performance',
    body: 'We may use first-party or privacy-conscious analytics to understand which pages are read, how long sessions last, and whether errors occur. If third-party analytics scripts are present, they are configured to minimise personal data where feasible; check your browser’s tracker blocking tools for additional control.',
  },
  {
    title: 'Embedded content & third parties',
    body: 'Some posts may link out to third-party sites or embed minimal widgets. Those services can set their own cookies when you interact with them. We do not control their practices—review their policies before signing in or submitting data on external properties.',
  },
  {
    title: 'How long cookies last',
    body: 'Session cookies expire when you close the browser. Persistent cookies may last for a defined period (for example, to remember preferences) or until you delete them. Exact durations depend on the tool implementing each cookie.',
  },
  {
    title: 'Your choices: browsers & devices',
    body: 'Most browsers let you refuse or delete cookies through settings. Blocking all cookies may break parts of the site (for example saved preferences). Use private or incognito mode for a session with fewer retained identifiers, understanding that essential cookies may still appear.',
  },
  {
    title: 'Do Not Track & global signals',
    body: 'Industry practice for “Do Not Track” signals is still evolving. We treat privacy requests submitted through our Privacy & disclosures process as the authoritative way to exercise rights that apply to you.',
  },
  {
    title: 'Updates to this notice',
    body: 'When we change how we use cookies or add materially new technologies, we will update this page and the “Last updated” date below. Significant changes may also be summarised on related pages or communicated where appropriate.',
  },
] as const

export default function CookiesPage() {
  return (
    <DistributionPageFrame
      title="Cookie notice"
      description={`How ${SITE_CONFIG.name} uses cookies and similar technologies for readers, contributors, and distribution partners browsing this site.`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-6 border border-[#f5c6c6] bg-[#fcecec] px-5 py-4 text-sm leading-relaxed text-[#7f1d1d]">
        <strong>Short version:</strong> We use cookies and storage to run the site securely, remember optional preferences,
        and understand readership in aggregate. We do not use this notice to sell personal data for unrelated ad
        networks.
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
            <Link href="/terms" className="text-[#6b0000] hover:underline">
              Terms of service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#6b0000] hover:underline">
              Contact the distribution desk
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
