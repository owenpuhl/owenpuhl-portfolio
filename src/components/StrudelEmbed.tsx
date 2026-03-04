import { useRef, useEffect, useState } from 'react'
import { buildStrudelURL } from '../engine/strudelEncoder'
import { useEmbedManager } from '../hooks/useEmbedManager'

interface StrudelEmbedProps {
  trackId: string
  code: string
  visible?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function StrudelEmbed({ trackId, code, visible = true, className = '', style = {} }: StrudelEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { register, deactivate } = useEmbedManager()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const strudelURL = buildStrudelURL(code)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    register(trackId, iframe)
    const handleLoad = () => setLoading(false)
    const handleError = () => { setLoading(false); setError(true) }
    iframe.addEventListener('load', handleLoad)
    iframe.addEventListener('error', handleError)
    return () => {
      iframe.removeEventListener('load', handleLoad)
      iframe.removeEventListener('error', handleError)
      deactivate(trackId)
    }
  }, [trackId, register, deactivate])

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe && iframe.src !== strudelURL) {
      setLoading(true)
      setError(false)
      iframe.src = strudelURL
    }
  }, [strudelURL])

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm ${className}`}
      style={{ display: visible ? 'block' : 'none', ...style }}
    >
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/5">
          <span className="font-sans text-xs text-muted-foreground italic">
            Loading Strudel REPL…
          </span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/5">
          <span className="font-sans text-xs text-muted-foreground">
            Failed to load Strudel.{' '}
            <a
              href={strudelURL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors duration-150"
            >
              Open directly
            </a>
          </span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        title={`Strudel REPL — ${trackId}`}
        sandbox="allow-scripts allow-same-origin allow-popups"
        allow="autoplay"
        className="w-full border-0"
        style={{ height: style.height || '420px' }}
      />
    </div>
  )
}
