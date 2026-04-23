import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { DISTRIBUTION_CATEGORY_LINKS } from '@/components/distribution/distribution-sidebar'

export const FOOTER_OVERRIDE_ENABLED = true

/** Sync only: used inside `PageShell` and other client boundaries via `<Footer />`. */
const LATEST_LINKS = [
  { label: 'All guest posts & updates', href: '/updates' },
  { label: 'Press & media kit', href: '/press' },
  { label: 'Submit for distribution', href: '/contact' },
  { label: 'Search the archive', href: '/search' },
] as const

export function FooterOverride() {
  return (
    <footer className="mt-auto bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
              Categories
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-300">
              {DISTRIBUTION_CATEGORY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
              Latest & outreach
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-300">
              {LATEST_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
              Search
            </h3>
            <form action="/search" method="get" className="mt-5 flex flex-col gap-2">
              <input type="hidden" name="master" value="1" />
              <input
                name="q"
                className="h-11 border border-neutral-600 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                placeholder="Search the archive"
              />
              <button
                type="submit"
                className="h-11 bg-white text-sm font-semibold uppercase tracking-wide text-neutral-900 hover:bg-neutral-200"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Guest publishing and media distribution.{' '}
          <Link href="/privacy" className="hover:text-neutral-300">
            Privacy
          </Link>
          {' · '}
          <Link href="/terms" className="hover:text-neutral-300">
            Terms
          </Link>
          {' · '}
          <Link href="/contact" className="hover:text-neutral-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
