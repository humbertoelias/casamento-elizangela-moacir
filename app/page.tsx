import { CountdownSection } from '@/components/CountdownSection'
import { Footer } from '@/components/Footer'
import { GallerySection } from '@/components/GallerySection'
import { GiftRegistrySection } from '@/components/GiftRegistrySection'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { MusicSection } from '@/components/MusicSection'
import { PixSection } from '@/components/PixSection'
import { RsvpSection } from '@/components/RsvpSection'
import { StorySection } from '@/components/StorySection'
import { VenueSection } from '@/components/VenueSection'
import { weddingData } from '@/src/data/wedding'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header coupleNames={weddingData.coupleNames} />
      <HeroSection
        coupleNames={weddingData.coupleNames}
        tagline={weddingData.tagline}
        weddingDateLabel={weddingData.weddingDateLabel}
        weddingLocation={weddingData.weddingLocation}
        galleryImages={weddingData.gallery}
        songName={weddingData.soundtrack.songName}
        artist={weddingData.soundtrack.artist}
        youtubeUrl={weddingData.soundtrack.youtubeUrl}
      />
      <CountdownSection weddingDate={weddingData.weddingDate} />
      <RsvpSection />
      <VenueSection
        venueName={weddingData.weddingLocation}
        venueUrl={weddingData.weddingLocationUrl}
      />
      <StorySection
        intro={weddingData.storyIntro}
        body={weddingData.storyBody}
        milestones={weddingData.milestones}
      />
      <GallerySection images={weddingData.gallery} />
      <MusicSection
        title={weddingData.soundtrack.title}
        songName={weddingData.soundtrack.songName}
        artist={weddingData.soundtrack.artist}
        youtubeUrl={weddingData.soundtrack.youtubeUrl}
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
