import Link from 'next/link'
import { Search } from 'lucide-react'
import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { DistributionSidebar } from '@/components/distribution/distribution-sidebar'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, fetchTaskPosts, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG } from '@/lib/site-config'
import { TaskPostCard } from '@/components/shared/task-post-card'

export const revalidate = 3

const matchText = (value: string, query: string) => value.toLowerCase().includes(query)

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')

const compactText = (value: unknown) => {
  if (typeof value !== 'string') return ''
  return stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>
}) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined
  )
  const posts = feed?.posts?.length
    ? feed.posts
    : useMaster
      ? []
      : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key))

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === 'object' ? post.content : {}
    const typeText = compactText((content as { type?: unknown }).type)
    if (typeText === 'comment') return false
    const description = compactText((content as { description?: unknown }).description)
    const body = compactText((content as { body?: unknown }).body)
    const excerpt = compactText((content as { excerpt?: unknown }).excerpt)
    const categoryText = compactText((content as { category?: unknown }).category)
    const tags = Array.isArray(post.tags) ? post.tags.join(' ') : ''
    const tagsText = compactText(tags)
    const derivedCategory = categoryText || tagsText
    if (category && !derivedCategory.includes(category)) return false
    if (task && typeText && typeText !== task) return false
    if (!normalized.length) return true
    return (
      matchText(compactText(post.title || ''), normalized) ||
      matchText(compactText(post.summary || ''), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    )
  })

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24)
  const sidebarPosts = await fetchTaskPosts('mediaDistribution', 6, { fresh: true })
  const recentForSidebar = sidebarPosts.map((p) => ({ slug: p.slug, title: p.title }))

  const searchForm = (
    <form action="/search" method="get" className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
      <input type="hidden" name="master" value="1" />
      {category ? <input type="hidden" name="category" value={category} /> : null}
      {task ? <input type="hidden" name="task" value={task} /> : null}
      <div className="relative w-full sm:w-72">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
        <input
          name="q"
          defaultValue={query}
          placeholder="Search titles, tags, body…"
          className="h-11 w-full border border-white/30 bg-white/10 pl-10 pr-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/60"
        />
      </div>
      <button
        type="submit"
        className="h-11 shrink-0 border border-white bg-white px-5 text-sm font-semibold uppercase tracking-wide text-[#6b0000] hover:bg-white/95"
      >
        Search
      </button>
    </form>
  )

  return (
    <DistributionPageFrame
      title="Search the archive"
      description={
        query
          ? `Showing matches for “${query}” across indexed posts.`
          : 'Run a query to filter titles, summaries, tags, and body text—or browse the latest index below.'
      }
      actions={searchForm}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <div className="min-w-0">
          {!normalized.length ? (
            <p className="text-sm text-neutral-600">
              Tip: start with a distinctive phrase from the headline or a partner name. For full guest-post listings, open{' '}
              <Link href="/updates" className="font-medium text-[#6b0000] hover:underline">
                Guest posts & syndication
              </Link>
              .
            </p>
          ) : null}

          <div className={normalized.length ? 'mt-0' : 'mt-8'}>
            {results.length ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {results.map((post) => {
                  const postTask = getPostTaskKey(post)
                  const href = postTask ? buildPostUrl(postTask, post.slug) : `/posts/${post.slug}`
                  return (
                    <li key={post.id}>
                      <TaskPostCard post={post} href={href} />
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center text-sm text-neutral-600">
                No matching posts yet. Try a shorter keyword or browse{' '}
                <Link href="/updates" className="font-medium text-[#6b0000] hover:underline">
                  /updates
                </Link>
                .
              </div>
            )}
          </div>
        </div>

        <DistributionSidebar recentPosts={recentForSidebar} className="lg:pt-1" />
      </div>
    </DistributionPageFrame>
  )
}
