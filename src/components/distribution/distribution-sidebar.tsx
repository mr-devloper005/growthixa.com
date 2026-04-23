import Link from 'next/link'

export type DistributionSidebarPost = { slug: string; title: string }

export const DISTRIBUTION_CATEGORY_LINKS = [
  { label: 'Press releases', href: '/press' },
  { label: 'Guest posts & syndication', href: '/updates' },
  { label: 'Distribution channels', href: '/updates' },
  { label: 'Editorial guidelines', href: '/terms' },
  { label: 'Privacy & disclosures', href: '/privacy' },
  { label: 'Help & support', href: '/help' },
] as const

export function DistributionSidebar({
  recentPosts,
  className = '',
}: {
  recentPosts: DistributionSidebarPost[]
  className?: string
}) {
  return (
    <aside className={`space-y-8 ${className}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Search</p>
        <form action="/search" method="get" className="mt-3 flex border border-neutral-300">
          <input type="hidden" name="master" value="1" />
          <label htmlFor="site-search" className="sr-only">
            Search posts
          </label>
          <input
            id="site-search"
            name="q"
            className="h-11 min-w-0 flex-1 border-0 px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            placeholder="Search titles and topics"
            autoComplete="off"
          />
          <button
            type="submit"
            className="shrink-0 bg-neutral-900 px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#6b0000]"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-900">Recent posts</h2>
        <ul className="mt-4 space-y-0 divide-y divide-neutral-200 border border-neutral-200">
          {recentPosts.length ? (
            recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/updates/${post.slug}`}
                  className="block px-4 py-3 text-sm leading-snug text-neutral-800 hover:bg-[#fff5f5] hover:text-[#6b0000]"
                >
                  {post.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-neutral-500">No posts yet.</li>
          )}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-900">Categories</h2>
        <ul className="mt-4 space-y-0 border border-neutral-200">
          {DISTRIBUTION_CATEGORY_LINKS.map((item) => (
            <li key={item.href + item.label} className="border-b border-neutral-200 last:border-b-0">
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-sm text-neutral-800 hover:bg-[#fff5f5] hover:text-[#6b0000]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
