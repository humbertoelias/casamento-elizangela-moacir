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
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : youtubeUrl
}

export function MusicSection({ title, songName, artist, youtubeUrl }: MusicSectionProps) {
  return (
    <section className="bg-[var(--color-panel)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Trilha sonora"
              title={title}
              description="Toda grande história de amor carrega uma música que resume o sentimento. A nossa tem melodia, memória e significado."
            />

            <div className="mt-8 rounded-[1.5rem] border border-[var(--color-border)] bg-white/82 p-6 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Música escolhida</p>
              <h3 className="mt-4 font-display text-3xl text-[var(--color-text-strong)]">{songName}</h3>
              <p className="mt-2 text-lg text-[var(--color-text)]">{artist}</p>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/72 px-5 py-3 text-sm font-semibold text-[var(--color-olive)] transition hover:bg-white"
              >
                Abrir no YouTube
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-white shadow-[0_24px_80px_rgba(91,112,87,0.14)]">
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
