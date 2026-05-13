import { SectionHeading } from '@/components/SectionHeading'
import type { StoryMilestone } from '@/src/data/wedding'

type StorySectionProps = {
  intro: string
  body: string
  milestones: StoryMilestone[]
}

export function StorySection({ intro, body, milestones }: StorySectionProps) {
  return (
    <section id="historia" className="bg-[var(--color-panel-2)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Nossa História"
              title="Um amor que cresceu com presença, leveza e verdade"
              description={intro}
            />

            <p className="mt-8 text-base leading-8 text-[var(--color-text)] sm:text-lg">{body}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/78 p-6 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Essência</p>
                <p className="mt-4 font-display text-3xl text-[var(--color-text-strong)]">Carinho, parceria e sonho</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/78 p-6 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Sentimento</p>
                <p className="mt-4 font-display text-3xl text-[var(--color-text-strong)]">Um futuro construído a dois</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-[var(--color-olive)]/40 via-[var(--color-border-strong)] to-transparent" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <article
                  key={milestone.title}
                  className="relative rounded-[1.5rem] border border-[var(--color-border)] bg-white/82 p-6 pl-10 shadow-[0_18px_54px_rgba(91,112,87,0.1)]"
                >
                  <div className="absolute left-3.5 top-8 h-4 w-4 rounded-full border border-[var(--color-olive)]/50 bg-[var(--color-serenity)] shadow-[0_0_0_6px_rgba(169,200,207,0.35)]" />
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">
                    Capítulo {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-[var(--color-text-strong)]">{milestone.title}</h3>
                  <p className="mt-4 leading-8 text-[var(--color-text)]">{milestone.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
