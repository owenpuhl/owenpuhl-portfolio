const activeEmbeds = new Map()
let currentlyPlayingId = null
const listeners = new Set()

function notifyListeners() {
  const state = getState()
  listeners.forEach((fn) => {
    try { fn(state) } catch (e) { console.error('[embedManager] Listener error:', e) }
  })
}

export function registerEmbed(trackId, iframe) {
  if (currentlyPlayingId && currentlyPlayingId !== trackId) {
    deactivateEmbed(currentlyPlayingId)
  }
  activeEmbeds.set(trackId, { iframe, status: 'loading' })
  iframe.addEventListener('load', () => {
    const embed = activeEmbeds.get(trackId)
    if (embed) { embed.status = 'ready'; notifyListeners() }
  })
  iframe.addEventListener('error', () => {
    const embed = activeEmbeds.get(trackId)
    if (embed) { embed.status = 'error'; notifyListeners() }
  })
  notifyListeners()
}

export function deactivateEmbed(trackId) {
  const embed = activeEmbeds.get(trackId)
  if (embed) {
    try { embed.iframe.src = 'about:blank' } catch (e) {}
    activeEmbeds.delete(trackId)
    if (currentlyPlayingId === trackId) { currentlyPlayingId = null }
    notifyListeners()
  }
}

export function setPlaying(trackId) {
  if (currentlyPlayingId && currentlyPlayingId !== trackId) {
    deactivateEmbed(currentlyPlayingId)
  }
  currentlyPlayingId = trackId
  const embed = activeEmbeds.get(trackId)
  if (embed) { embed.status = 'playing' }
  notifyListeners()
}

export function setStopped(trackId) {
  if (currentlyPlayingId === trackId) { currentlyPlayingId = null }
  const embed = activeEmbeds.get(trackId)
  if (embed) { embed.status = 'stopped' }
  notifyListeners()
}

export function getState() {
  return { activeEmbeds: new Map(activeEmbeds), currentlyPlayingId }
}

export function getEmbedStatus(trackId) {
  const embed = activeEmbeds.get(trackId)
  return embed ? embed.status : null
}

export function subscribe(callback) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

export function destroyAll() {
  for (const [trackId] of activeEmbeds) { deactivateEmbed(trackId) }
  activeEmbeds.clear()
  currentlyPlayingId = null
  notifyListeners()
}
