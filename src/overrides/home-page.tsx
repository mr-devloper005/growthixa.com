import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { DistributionSidebar } from '@/components/distribution/distribution-sidebar'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for outreach context and the complete update.'
  return value.length > 260 ? value.slice(0, 257).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 14, { fresh: true })
  const featured = posts[0]
  const rest = posts.slice(1)
  const sidebarRecent = posts.slice(0, 6).map((p) => ({ slug: p.slug, title: p.title }))

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <div className="min-w-0">
          {featured ? (
            <article className="border-b border-neutral-200 pb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {String((featured.content as { category?: string })?.category || 'Featured distribution')}
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.35rem]">
                {featured.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                <time dateTime={featured.publishedAt || undefined}>
                  {new Date(featured.publishedAt || Date.now()).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="text-neutral-300">·</span>
                <span>By {featured.authorName || 'Editorial desk'}</span>
              </div>
              <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-neutral-700">{excerpt(featured.summary)}</p>
              <div className="mt-8">
                <Link
                  href={`/updates/${featured.slug}`}
                  className="inline-flex items-center justify-center bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#6b0000]"
                >
                  Continue reading
                </Link>
              </div>
            </article>
          ) : (
            <div className="border-b border-neutral-200 pb-12">
              <h1 className="text-3xl font-bold text-neutral-950">{SITE_CONFIG.name}</h1>
              <p className="mt-4 max-w-2xl text-neutral-600">{SITE_CONFIG.description}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex bg-neutral-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#6b0000]"
              >
                Submit a guest post
              </Link>
            </div>
          )}

          <div className="space-y-12 pt-12">
            {rest.map((post) => (
              <article key={post.id} className="border-b border-neutral-200 pb-12">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {String((post.content as { category?: string })?.category || 'Guest post')}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-neutral-950 sm:text-3xl">{post.title}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                  <time dateTime={post.publishedAt || undefined}>
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="text-neutral-300">·</span>
                  <span>By {post.authorName || 'Editorial desk'}</span>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-[1.75] text-neutral-700">{excerpt(post.summary)}</p>
                <div className="mt-6">
                  <Link
                    href={`/updates/${post.slug}`}
                    className="inline-flex items-center justify-center border border-neutral-900 bg-neutral-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#6b0000]"
                  >
                    Continue reading
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <DistributionSidebar recentPosts={sidebarRecent} className="lg:pt-2" />
      </main>
      <Footer />
    </div>
  )
}
