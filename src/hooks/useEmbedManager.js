import { useState, useEffect, useCallback } from 'react'
import * as embedManager from '../engine/embedManager'

export function useEmbedManager() {
  const [state, setState] = useState(() => embedManager.getState())

  useEffect(() => {
    const unsubscribe = embedManager.subscribe((newState) => { setState(newState) })
    return unsubscribe
  }, [])

  const register = useCallback((trackId, iframe) => { embedManager.registerEmbed(trackId, iframe) }, [])
  const deactivate = useCallback((trackId) => { embedManager.deactivateEmbed(trackId) }, [])
  const setPlaying = useCallback((trackId) => { embedManager.setPlaying(trackId) }, [])
  const setStopped = useCallback((trackId) => { embedManager.setStopped(trackId) }, [])
  const destroyAll = useCallback(() => { embedManager.destroyAll() }, [])
  const getStatus = useCallback((trackId) => { return embedManager.getEmbedStatus(trackId) }, [])

  return {
    currentlyPlayingId: state.currentlyPlayingId,
    register, deactivate, setPlaying, setStopped, destroyAll, getStatus,
  }
}
