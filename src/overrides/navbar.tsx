'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const utilityLinks = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Guest post guidelines', href: '/terms' },
  { label: 'Submit a guest post', href: '/contact' },
]

const mainNav = [
  { label: 'Press releases', href: '/press' },
  { label: 'Guest posts', href: '/updates' },
  { label: 'Distribution', href: '/updates' },
  { label: 'Media kit', href: '/press' },
  { label: 'Guidelines', href: '/terms' },
  { label: 'Submit post', href: '/contact' },
  { label: 'Search', href: '/search' },
]

const social = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

export function NavbarOverride() {
  return (
    <header className="text-white">
      <div className="bg-[#6b0000]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] sm:px-6">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {utilityLinks.map((item) => (
              <Link key={item.href + item.label} href={item.href} className="text-white/90 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {social.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/85 hover:text-white"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-neutral-200 bg-white py-8 text-neutral-900">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Link
            href="/"
            className="font-serif text-4xl font-semibold uppercase tracking-[0.28em] text-[#1a1a1a] sm:text-5xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {SITE_CONFIG.name}
          </Link>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
            Media distribution, guest publishing, and syndicated outreach for brands and editorial teams.
          </p>
        </div>
      </div>

      <nav className="bg-[#6b0000]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-1 gap-y-0 px-2 py-0 sm:px-4">
          {mainNav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="px-3 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 hover:bg-black/15 sm:px-4 sm:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
