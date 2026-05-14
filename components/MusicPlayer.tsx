'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import type { AudioTrack } from '@/src/data/wedding'

type MusicPlayerProps = {
  tracks: AudioTrack[]
  autoPlay?: boolean
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) {
    return '0:00'
  }

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

export function MusicPlayer({ tracks, autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const autoplayTriedRef = useRef(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [autoplayWasBlocked, setAutoplayWasBlocked] = useState(false)

  const currentTrack = tracks[currentIndex]

  const progress = useMemo(() => {
    if (!duration) {
      return 0
    }

    return Math.min((currentTime / duration) * 100, 100)
  }, [currentTime, duration])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false)
        setAutoplayWasBlocked(true)
      })
    } else {
      audio.pause()
    }
  }, [currentIndex, isPlaying])

  useEffect(() => {
    if (!autoPlay || autoplayTriedRef.current || !currentTrack) {
      return
    }

    autoplayTriedRef.current = true
    setIsPlaying(true)
  }, [autoPlay, currentTrack])

  if (!currentTrack) {
    return null
  }

  function playTrack(index: number) {
    setCurrentIndex(index)
    setCurrentTime(0)
    setDuration(0)
    setIsPlaying(true)
    setAutoplayWasBlocked(false)
  }

  function goToPrevious() {
    setCurrentIndex((current) => (current === 0 ? tracks.length - 1 : current - 1))
    setCurrentTime(0)
    setDuration(0)
    setAutoplayWasBlocked(false)
  }

  function goToNext(shouldPlay = isPlaying) {
    setCurrentIndex((current) => (current + 1) % tracks.length)
    setCurrentTime(0)
    setDuration(0)
    setIsPlaying(shouldPlay)
    setAutoplayWasBlocked(false)
  }

  function handleSeek(value: string) {
    const audio = audioRef.current
    const nextTime = Number(value)

    if (!audio || Number.isNaN(nextTime)) {
      return
    }

    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/86 p-4 shadow-[0_18px_54px_rgba(91,112,87,0.12)]">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => goToNext(true)}
      />

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsPlaying((current) => !current)}
          className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--color-olive)] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(91,112,87,0.24)] transition hover:-translate-y-0.5"
          aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        >
          {isPlaying ? 'Pausar' : 'Tocar'}
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-olive-soft)]">
            Tocando agora
          </p>
          <h2 className="truncate font-display text-2xl leading-tight text-[var(--color-text-strong)]">
            {currentTrack.title}
          </h2>
          <p className="text-sm text-[var(--color-text)]">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="mt-5">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={(event) => handleSeek(event.target.value)}
          className="h-2 w-full cursor-pointer accent-[var(--color-olive)]"
          aria-label="Progresso da música"
        />
        <div className="mt-2 flex items-center justify-between text-xs font-medium text-[var(--color-text-muted)]">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          className="rounded-full border border-[var(--color-border-strong)] bg-white/72 px-4 py-2 text-xs font-semibold text-[var(--color-text-strong)] transition hover:bg-white"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => goToNext()}
          className="rounded-full border border-[var(--color-border-strong)] bg-white/72 px-4 py-2 text-xs font-semibold text-[var(--color-text-strong)] transition hover:bg-white"
        >
          Próxima
        </button>
        <span className="ml-auto text-xs font-medium text-[var(--color-text-muted)]">
          {currentIndex + 1} de {tracks.length}
        </span>
      </div>

      <div className="mt-4 grid gap-2">
        {tracks.map((track, index) => (
          <button
            key={track.src}
            type="button"
            onClick={() => playTrack(index)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
              index === currentIndex
                ? 'border-[var(--color-olive)] bg-[var(--color-serenity)] text-[var(--color-text-strong)]'
                : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-white'
            }`}
          >
            <span className="block truncate font-semibold">{track.title}</span>
            <span className="block truncate text-xs opacity-75">{track.artist}</span>
          </button>
        ))}
      </div>

      {autoplayWasBlocked ? (
        <p className="mt-4 rounded-2xl bg-[var(--color-bg)] px-4 py-3 text-xs leading-6 text-[var(--color-text)]">
          O navegador aguardou um toque para liberar o áudio. É só apertar Play.
        </p>
      ) : null}

      <div
        className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-soft)]"
        aria-hidden="true"
      >
        <div
          className="h-full rounded-full bg-[var(--color-olive)] transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
