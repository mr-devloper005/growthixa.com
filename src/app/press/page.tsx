import { DistributionPageFrame } from '@/components/distribution/distribution-page-frame'
import { PressPageClient } from './press-client'

export default function PressPage() {
  return (
    <DistributionPageFrame
      title="Press & media kit"
      description="Text-first resources for journalists, partners, and syndication desks—boilerplate, coverage notes, and distribution context without image-heavy downloads."
    >
      <PressPageClient />
    </DistributionPageFrame>
  )
}
