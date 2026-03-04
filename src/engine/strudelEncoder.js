const STRUDEL_BASE_URL = 'https://strudel.cc'

export function encodeStrudelCode(code) {
  const bytes = new TextEncoder().encode(code)
  const binaryStr = Array.from(bytes, (b) => String.fromCharCode(b)).join('')
  return btoa(binaryStr)
}

export function decodeStrudelCode(hash) {
  try {
    const binaryStr = atob(hash)
    const bytes = Uint8Array.from(binaryStr, (c) => c.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch (e) {
    console.error('[strudelEncoder] Failed to decode hash:', e)
    return ''
  }
}

export function buildStrudelURL(code, { hideHeader = false } = {}) {
  const encoded = encodeStrudelCode(code)
  return `${STRUDEL_BASE_URL}/#${encoded}`
}

export function buildShareURL(code) {
  return buildStrudelURL(code)
}

export function extractCodeFromURL(url) {
  try {
    const parsed = new URL(url)
    if (parsed.hash && parsed.hash.length > 1) {
      const hash = parsed.hash.slice(1)
      return decodeStrudelCode(hash)
    }
    return null
  } catch (e) {
    console.error('[strudelEncoder] Invalid URL:', e)
    return null
  }
}

export function validateStrudelCode(code) {
  const warnings = []
  if (!code || code.trim().length === 0) {
    return { valid: false, warnings: ['Code is empty'] }
  }
  const hasStrudelPattern = /\$:|note\(|s\(|n\(|stack\(|setcps\(/.test(code)
  if (!hasStrudelPattern) {
    warnings.push('Code may not contain recognizable Strudel patterns')
  }
  const openParens = (code.match(/\(/g) || []).length
  const closeParens = (code.match(/\)/g) || []).length
  if (openParens !== closeParens) {
    warnings.push(`Unbalanced parentheses: ${openParens} open, ${closeParens} close`)
  }
  return { valid: warnings.length === 0, warnings }
}
