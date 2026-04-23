import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

type DistributionPageFrameProps = {
  title: string
  description?: string
  /** e.g. search form in the hero row */
  actions?: ReactNode
  children: ReactNode
}

export function DistributionPageFrame({ title, description, actions, children }: DistributionPageFrameProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <header className="bg-[#6b0000] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
            {description ? (
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">{children}</div>
      <Footer />
    </div>
  )
}
