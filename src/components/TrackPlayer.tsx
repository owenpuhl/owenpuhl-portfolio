import { useState, useCallback, useMemo } from 'react'
import StrudelEmbed from './StrudelEmbed'
import CodeViewer from './CodeViewer'
import { buildShareURL } from '../engine/strudelEncoder'
import { useEmbedManager } from '../hooks/useEmbedManager'

interface Track {
  id: string
  title: string
  description: string
  genre: string
  tags: string[]
  bpm: number | null
  code: string
}

interface TrackPlayerProps {
  track: Track
}

export default function TrackPlayer({ track }: TrackPlayerProps) {
  const [mode, setMode] = useState<'listen' | 'edit'>('listen')
  const [launched, setLaunched] = useState(false)
  const [copied, setCopied] = useState(false)
  const { currentlyPlayingId, deactivate } = useEmbedManager()
  const isActive = currentlyPlayingId === track.id
  const shareURL = useMemo(() => buildShareURL(track.code), [track.code])

  const handleLaunch = useCallback(() => setLaunched(true), [])
  const handleStop = useCallback(() => {
    deactivate(track.id)
    setLaunched(false)
  }, [deactivate, track.id])

  const handleToggleMode = useCallback(() => {
    setMode((prev) => {
      if (prev === 'listen') { setLaunched(true); return 'edit' }
      return 'listen'
    })
  }, [])

  const handleCopyShare = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareURL)
    } catch {
      const input = document.createElement('input')
      input.value = shareURL
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [shareURL])

  return (
    <article className="border-b border-border pb-8 mb-8 last:border-b-0 last:mb-0">
      {/* Header row */}
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3
          className="text-foreground leading-snug"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', fontWeight: 400 }}
        >
          {track.title}
        </h3>
        <div className="flex gap-4 flex-shrink-0 pt-0.5">
          <button
            onClick={handleToggleMode}
            className="font-sans text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-2 transition-colors duration-150 cursor-pointer"
          >
            {mode === 'listen' ? 'Edit' : 'Listen'}
          </button>
          <button
            onClick={handleCopyShare}
            className="font-sans text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-2 transition-colors duration-150 cursor-pointer"
          >
            {copied ? 'Copied' : 'Share'}
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="font-sans text-[13px] text-muted-foreground mb-3 leading-relaxed">
        {track.description}
      </p>

      {/* Meta row: genre pill + bpm + tags */}
      <div className="flex items-center gap-1.5 mb-6 flex-wrap font-sans">
        <span
          className="inline-block border rounded-sm px-1.5 py-0 text-primary border-primary/40"
          style={{ fontSize: '10px', lineHeight: '18px' }}
        >
          {track.genre}
        </span>
        {track.bpm && (
          <span className="text-muted-foreground/60" style={{ fontSize: '11px' }}>
            · {track.bpm} BPM
          </span>
        )}
        {track.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-muted-foreground/50" style={{ fontSize: '11px' }}>
            · {tag}
          </span>
        ))}
      </div>

      {/* Listen mode */}
      {mode === 'listen' && (
        <div>
          {!launched ? (
            <div className="flex flex-col items-center gap-4">
              <CodeViewer code={track.code} />
              <button
                onClick={handleLaunch}
                className="mt-2 border border-primary/50 text-primary font-sans text-[13px] px-6 py-2 rounded-sm hover:bg-primary/5 transition-colors duration-150 cursor-pointer"
              >
                ▶ Launch in Strudel
              </button>
              <p className="font-sans text-[11px] text-muted-foreground/60">
                Opens the Strudel REPL with this code.
              </p>
            </div>
          ) : (
            <div>
              <StrudelEmbed trackId={track.id} code={track.code} visible style={{ height: '420px' }} />
              <div className="text-right mt-2">
                <button
                  onClick={handleStop}
                  className="font-sans text-[11px] text-destructive/70 hover:text-destructive transition-colors duration-150 cursor-pointer"
                >
                  Unload
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Edit mode */}
      {mode === 'edit' && (
        <div>
          <StrudelEmbed trackId={track.id} code={track.code} visible style={{ height: '500px' }} />
          <p className="font-sans text-[11px] text-muted-foreground/60 italic mt-2">
            Edit mode — modify the code above. Changes are live but not saved.
          </p>
        </div>
      )}
    </article>
  )
}
