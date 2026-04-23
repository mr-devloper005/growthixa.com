import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { DistributionSidebar } from '@/components/distribution/distribution-sidebar'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const allPosts = await fetchTaskPosts('mediaDistribution', 80, { fresh: true })
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const idx = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = idx > 0 ? allPosts[idx - 1] : null
  const nextPost = idx >= 0 && idx < allPosts.length - 1 ? allPosts[idx + 1] : null

  const sidebarPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 6)
  const recentForSidebar = sidebarPosts.map((p) => ({ slug: p.slug, title: p.title }))

  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const category =
    (typeof content.category === 'string' && content.category.trim()) ||
    (Array.isArray(post.tags) ? post.tags.find((t) => typeof t === 'string') : '') ||
    'Media distribution'
  const authorLine = post.authorName || 'Editorial desk'
  const published = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const website = SITE_CONFIG.baseUrl.replace(/\/$/, '')

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <article className="min-w-0">
          <div className="text-sm text-neutral-600">
            <p>
              <span className="font-semibold text-neutral-800">Contact:</span>{' '}
              <span className="text-neutral-700">Editorial desk</span>
            </p>
            <p className="mt-1">
              <span className="font-semibold text-neutral-800">Website:</span>{' '}
              <Link href={website} className="text-[#6b0000] underline-offset-2 hover:underline">
                {website.replace(/^https?:\/\//, '')}
              </Link>
            </p>
          </div>

          <h1 className="mt-10 text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-neutral-500">
            {published}
            {authorLine ? <span className="text-neutral-400"> · </span> : null}
            {authorLine ? <span>By {authorLine}</span> : null}
          </p>

          <div className="mt-8 border border-neutral-300 bg-neutral-50 px-4 py-4 text-sm text-neutral-800">
            <p className="font-semibold text-neutral-900">{authorLine}</p>
            <p className="mt-2 leading-relaxed text-neutral-700">
              {typeof post.summary === 'string' && post.summary.trim()
                ? post.summary
                : 'Syndicated guest contribution published for media distribution and outreach.'}
            </p>
          </div>

          <div className="mt-6 border border-[#f5c6c6] bg-[#fcecec] px-4 py-3 text-sm leading-relaxed text-[#7f1d1d]">
            <strong>Disclaimer:</strong> This material is provided for informational and distribution purposes. It does not
            constitute professional, financial, or legal advice. The publisher and distribution partners are not
            responsible for decisions made by readers or downstream outlets.
          </div>

          <div className="article-content mt-10 max-w-none text-base leading-[1.75] text-neutral-800">
            <RichContent html={html} className="prose-neutral max-w-none prose-headings:font-bold prose-p:my-5" />
          </div>

          <p className="mt-10 text-sm text-neutral-500">
            Posted in: <span className="text-neutral-800">{String(category)}</span>, {SITE_CONFIG.name}
          </p>

          <div className="mt-10 border-t border-neutral-200 pt-8">
            <div className="grid gap-0 border border-neutral-200 md:grid-cols-2">
              {prevPost ? (
                <Link
                  href={`/updates/${prevPost.slug}`}
                  className="border-b border-neutral-200 p-5 hover:bg-neutral-50 md:border-b-0 md:border-r md:border-neutral-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Previous</p>
                  <p className="mt-2 text-sm font-medium leading-snug text-neutral-800">{prevPost.title}</p>
                </Link>
              ) : (
                <div className="border-b border-neutral-200 p-5 text-sm text-neutral-400 md:border-b-0 md:border-r">
                  Previous post unavailable.
                </div>
              )}
              {nextPost ? (
                <Link href={`/updates/${nextPost.slug}`} className="p-5 text-right hover:bg-neutral-50">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Next</p>
                  <p className="mt-2 text-sm font-medium leading-snug text-neutral-800">{nextPost.title}</p>
                </Link>
              ) : (
                <div className="p-5 text-right text-sm text-neutral-400">Next post unavailable.</div>
              )}
            </div>
          </div>
        </article>

        <DistributionSidebar recentPosts={recentForSidebar} className="lg:pt-2" />
      </main>
      <Footer />
    </div>
  )
}
