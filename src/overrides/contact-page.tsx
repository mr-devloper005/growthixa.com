import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const checklist = [
  'Working headline and 2–3 sentence summary for the distribution wire',
  'Author byline, short bio line, and any sponsor or affiliate disclosure copy',
  'Preferred publish window and whether the piece is exclusive or syndication-friendly',
  'Outbound links you need preserved, plus canonical URL if republishing from elsewhere',
] as const

const timelines = [
  { stage: 'Triage', detail: 'We confirm fit, originality, and disclosure within a few business days.' },
  { stage: 'Edit pass', detail: 'Light structural edits for web syndication; major rewrites are sent back with notes.' },
  { stage: 'Schedule', detail: 'We slot the post into the calendar and share expected live time with you.' },
  { stage: 'Live & syndication', detail: 'After publish, partner pickups are coordinated where agreements exist.' },
] as const

export function ContactPageOverride() {
  const domain = SITE_CONFIG.domain

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <header className="bg-[#6b0000] px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Submit for distribution</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90">
            Guest posts, press announcements, and syndicated stories for {SITE_CONFIG.name}. Use the channels below so
            your request lands with the right reviewers—editorial, compliance, or partner outreach.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
              <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
              Desk contacts
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="border border-neutral-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Editorial desk</p>
                <p className="mt-3 break-all text-lg font-semibold text-neutral-900">editor@{domain}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Pitches, drafts, op-eds, and column ideas intended for syndicated placement or on-site publication.
                </p>
              </div>
              <div className="border border-neutral-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Distribution support</p>
                <p className="mt-3 break-all text-lg font-semibold text-neutral-900">distribution@{domain}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Partner lists, republishing windows, technical syndication issues, and pickup reporting.
                </p>
              </div>
            </div>

            <div className="mt-10 border border-[#f5c6c6] bg-[#fcecec] px-5 py-4 text-sm leading-relaxed text-[#7f1d1d]">
              <strong>Before you send:</strong> We review every submission for fit, originality, and disclosure. We do
              not accept undisclosed sponsored content, scraped articles, or material that misrepresents sources.
              Typical first response is a few business days.
            </div>

            <div className="mt-10">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
                Include in your email
              </h2>
              <ul className="mt-4 space-y-3 border border-neutral-200 bg-neutral-50/60 px-5 py-5 text-sm text-neutral-700">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 font-bold text-[#6b0000]" aria-hidden>
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
              <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
              What happens next
            </h2>
            <ol className="mt-6 space-y-0 divide-y divide-neutral-200 border border-neutral-200">
              {timelines.map((row, i) => (
                <li key={row.stage} className="flex gap-4 px-5 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-neutral-900 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{row.stage}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{row.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border border-neutral-200 px-5 py-4 text-sm text-neutral-600">
              <p className="font-semibold text-neutral-900">Quick links</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/updates" className="text-[#6b0000] hover:underline">
                    Browse guest posts
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-[#6b0000] hover:underline">
                    Press & media kit
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#6b0000] hover:underline">
                    Terms & guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#6b0000] hover:underline">
                    Privacy & disclosures
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-[#6b0000] hover:underline">
                    Search the archive
                  </Link>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-800">Website:</span>{' '}
              <Link href={SITE_CONFIG.baseUrl} className="text-[#6b0000] underline-offset-2 hover:underline">
                {SITE_CONFIG.baseUrl.replace(/\/$/, '')}
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
