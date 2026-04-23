export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'qpzsrstilh',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Growthixa',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Guest posts & media distribution',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A guest publishing and media distribution desk for syndicated stories, press outreach, and editorial placements—without noisy feeds or stock imagery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'growthixa.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growthixa.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
