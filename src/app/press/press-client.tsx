'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export function PressPageClient() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <>
      <div className="border border-[#f5c6c6] bg-[#fcecec] px-5 py-4 text-sm leading-relaxed text-[#7f1d1d]">
        <strong>For newsrooms:</strong> Everything here is text-first—paste into briefs, partner decks, or CMS fields.
        Request custom quotes or data points via the{' '}
        <a href="/contact" className="font-semibold underline underline-offset-2 hover:text-[#450a0a]">
          distribution desk
        </a>
        .
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section>
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
            Boilerplate & assets
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Short descriptions and file references you can adapt for syndication, wire copy, or partner newsletters.
          </p>
          <ul className="mt-8 space-y-0 divide-y divide-neutral-200 border border-neutral-200">
            {mockPressAssets.map((asset) => (
              <li key={asset.id} className="px-4 py-4 sm:px-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900">{asset.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{asset.description}</p>
                    <Badge variant="secondary" className="mt-3 text-[10px] uppercase tracking-wide">
                      {asset.fileType}
                    </Badge>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <Button size="sm" variant="outline" className="border-neutral-300" onClick={() => setActiveAssetId(asset.id)}>
                      Preview text
                    </Button>
                    <Button
                      size="sm"
                      className="bg-neutral-900 text-white hover:bg-[#6b0000]"
                      onClick={() =>
                        toast({
                          title: 'Download queued',
                          description: `${asset.title} — use the preview to confirm copy before publishing.`,
                        })
                      }
                    >
                      Request file
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            <span className="inline-block h-4 w-0.5 bg-[#c62828]" aria-hidden />
            Coverage & mentions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            Representative pickups and syndicated placements. Dates reflect publication or wire time.
          </p>
          <ul className="mt-8 space-y-4">
            {mockPressCoverage.map((item) => (
              <li
                key={item.id}
                className="border border-neutral-200 bg-neutral-50/80 px-5 py-4 transition hover:border-[#6b0000]/30"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{item.outlet}</p>
                <p className="mt-2 text-sm font-medium leading-snug text-neutral-900">{item.headline}</p>
                <p className="mt-2 text-xs text-neutral-500">{item.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-lg border-neutral-200">
          <DialogHeader>
            <DialogTitle className="text-left">{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          <div className="border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Plain-text excerpt</p>
            <p className="mt-2 leading-relaxed">{activeAsset?.description}</p>
            <p className="mt-3 border-t border-neutral-200 pt-3 text-xs text-neutral-500">
              This site does not host image previews in dialogs. Copy the text above or request the full asset from the
              desk.
            </p>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-neutral-900 hover:bg-[#6b0000]"
              onClick={() =>
                toast({
                  title: 'Copied to workflow',
                  description: `Use ${activeAsset?.title} in your syndication package.`,
                })
              }
            >
              Mark for package
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
