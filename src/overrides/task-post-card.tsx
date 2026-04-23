import Link from 'next/link'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export const TASK_POST_CARD_OVERRIDE_ENABLED = true

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const excerpt = (post: SitePost, max = 160) => {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    post.summary ||
    ''
  const text = stripHtml(raw)
  if (!text) return 'Open the post for full distribution details.'
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`
}

export function TaskPostCardOverride({
  post,
  href,
}: {
  post: SitePost
  href: string
  taskKey?: TaskKey
  compact?: boolean
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const category =
    (typeof content.category === 'string' && content.category) ||
    (Array.isArray(post.tags) ? post.tags.find((t) => typeof t === 'string') : '') ||
    'Post'

  return (
    <Link
      href={href}
      className="flex h-full flex-col border border-neutral-200 bg-white p-5 transition hover:border-[#6b0000]/40 hover:shadow-sm"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{String(category)}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">{post.title}</h3>
      <p className="mt-3 grow text-sm leading-relaxed text-neutral-600">{excerpt(post)}</p>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#6b0000]">Read post →</span>
    </Link>
  )
}
