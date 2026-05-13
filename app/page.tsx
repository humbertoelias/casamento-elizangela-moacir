import { CountdownSection } from '@/components/CountdownSection'
import { Footer } from '@/components/Footer'
import { GiftRegistrySection } from '@/components/GiftRegistrySection'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { OpenAtTop } from '@/components/OpenAtTop'
import { PixSection } from '@/components/PixSection'
import { RsvpSection } from '@/components/RsvpSection'
import { VenueSection } from '@/components/VenueSection'
import { weddingData } from '@/src/data/wedding'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <OpenAtTop />
      <Header coupleNames={weddingData.coupleNames} />
      <HeroSection
        coupleNames={weddingData.coupleNames}
        tagline={weddingData.tagline}
        weddingDateLabel={weddingData.weddingDateLabel}
        weddingLocation={weddingData.weddingLocation}
        galleryImages={weddingData.gallery}
        tracks={weddingData.soundtrack.tracks}
      />
      <CountdownSection weddingDate={weddingData.weddingDate} />
      <RsvpSection />
      <VenueSection
        venueName={weddingData.weddingLocation}
        venueUrl={weddingData.weddingLocationUrl}
      />
      <GiftRegistrySection
        physicalGifts={weddingData.physicalGifts}
        pixGifts={weddingData.pixGifts}
      />
      <PixSection pixKey={weddingData.pixKey} />
      <Footer coupleNames={weddingData.coupleNames} />
    </main>
  )
}
