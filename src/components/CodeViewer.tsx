import { useState, useCallback } from 'react'

interface CodeViewerProps {
  code: string
  maxLines?: number
}

export default function CodeViewer({ code, maxLines = 12 }: CodeViewerProps) {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const lines = code.split('\n')
  const needsCollapse = lines.length > maxLines
  const displayCode = expanded ? code : lines.slice(0, maxLines).join('\n')

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [code])

  return (
    <div className="relative w-full">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>

      <pre
        className="relative overflow-x-auto text-xs leading-relaxed p-4 rounded-sm border border-border"
        style={{
          fontFamily: 'var(--font-mono)',
          backgroundColor: 'hsl(var(--code-bg))',
          maxHeight: expanded ? 'none' : `${maxLines * 1.65}em`,
          fontSize: '12px',
        }}
      >
        <code className="text-foreground/80">{displayCode}</code>

        {needsCollapse && !expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center pb-2"
            style={{
              background: `linear-gradient(transparent, hsl(var(--code-bg)))`,
            }}
          >
            <button
              onClick={() => setExpanded(true)}
              className="font-sans text-[11px] text-muted-foreground hover:text-primary transition-colors duration-150 cursor-pointer"
            >
              Show all {lines.length} lines
            </button>
          </div>
        )}
      </pre>

      {needsCollapse && expanded && (
        <div className="text-center mt-1">
          <button
            onClick={() => setExpanded(false)}
            className="font-sans text-[11px] text-muted-foreground hover:text-primary transition-colors duration-150 cursor-pointer"
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  )
}
