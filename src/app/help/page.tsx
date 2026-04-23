import Link from 'next/link'
import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { HelpFaqPanel } from './help-faq-panel'

const topicCards = [
  {
    title: 'Guest posts & syndication',
    body: 'Pitch structure, disclosure rules, and how we schedule syndicated placements across partner surfaces.',
  },
  {
    title: 'Press & announcements',
    body: 'Wire-style updates, embargo handling, and how we coordinate quotes with your comms team.',
  },
  {
    title: 'Search & archive',
    body: 'Finding older distribution stories, keyword tips, and when to request a manual lookup from the desk.',
  },
  {
    title: 'Compliance & privacy',
    body: 'Data we retain for submissions, retention windows, and how to exercise privacy rights tied to outreach.',
  },
] as const

export default function HelpPage() {
  return (
    <DistributionPageFrame
      title="Help & support"
      description="Guides for guest authors, syndication partners, and newsrooms working with our distribution desk."
      actions={
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center border border-white/40 bg-white px-5 text-sm font-semibold text-[#6b0000] hover:bg-white/95"
        >
          Contact distribution
        </Link>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
            Topic guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {topicCards.map((topic) => (
              <div
                key={topic.title}
                className="border border-neutral-200 bg-neutral-50/50 p-5 transition hover:border-[#6b0000]/35"
              >
                <h3 className="text-sm font-semibold text-neutral-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{topic.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-neutral-200 px-5 py-4 text-sm text-neutral-600">
            <p className="font-medium text-neutral-900">Still stuck?</p>
            <p className="mt-2">
              Browse{' '}
              <Link href="/updates" className="font-medium text-[#6b0000] hover:underline">
                published guest posts
              </Link>{' '}
              for tone examples, or read{' '}
              <Link href="/terms" className="font-medium text-[#6b0000] hover:underline">
                terms & guidelines
              </Link>{' '}
              before writing in.
            </p>
          </div>
        </div>
        <div>
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
            Frequently asked
          </h2>
          <p className="mt-3 text-sm text-neutral-600">Answers focused on distribution, guest posts, and partner workflows.</p>
          <div className="mt-6">
            <HelpFaqPanel />
          </div>
        </div>
      </div>
    </DistributionPageFrame>
  )
}
