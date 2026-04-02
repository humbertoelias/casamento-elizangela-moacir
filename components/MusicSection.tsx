import { SectionHeading } from '@/components/SectionHeading'

type MusicSectionProps = {
  title: string
  songName: string
  artist: string
  youtubeUrl: string
}

function getEmbedUrl(youtubeUrl: string) {
  const parsed = youtubeUrl.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]+)/)
  const videoId = parsed?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : youtubeUrl
}

export function MusicSection({ title, songName, artist, youtubeUrl }: MusicSectionProps) {
  return (
    <section id="trilha" className="bg-[linear-gradient(180deg,rgba(9,15,22,1),rgba(12,20,28,0.95))] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Trilha sonora"
              title={title}
              description="Toda grande história de amor carrega uma música que resume o sentimento. A nossa tem melodia, memória e significado."
            />

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">Música escolhida</p>
              <h3 className="mt-4 font-display text-3xl text-white">{songName}</h3>
              <p className="mt-2 text-lg text-[var(--color-text)]">{artist}</p>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-[var(--color-olive-soft)]/40 px-5 py-3 text-sm font-medium text-[var(--color-olive-soft)] transition hover:bg-[var(--color-olive-soft)]/10"
              >
                Abrir no YouTube
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
            <div className="aspect-video w-full">
              <iframe
                title={songName}
                src={getEmbedUrl(youtubeUrl)}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
