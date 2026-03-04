import { useState, useMemo } from 'react'
import TrackPlayer from './TrackPlayer'
import { TRACKS, getAllGenres, searchTracks } from '../data/tracks'

export default function TrackList({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [activeGenre, setActiveGenre] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const genres = useMemo(() => ['All', ...getAllGenres()], [])

  const filteredTracks = useMemo(() => {
    let tracks = [...TRACKS]
    if (featuredOnly) tracks = tracks.filter((t) => t.featured)
    if (activeGenre !== 'All') tracks = tracks.filter((t) => t.genre === activeGenre)
    if (searchQuery.trim()) {
      const searched = searchTracks(searchQuery)
      const searchedIds = new Set(searched.map((t) => t.id))
      tracks = tracks.filter((t) => searchedIds.has(t.id))
    }
    return tracks
  }, [activeGenre, searchQuery, featuredOnly])

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-6 mb-10 flex-wrap">
        <nav className="flex gap-4 font-sans text-[13px]">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`pb-0.5 transition-colors duration-150 cursor-pointer ${
                activeGenre === genre
                  ? 'text-foreground border-b border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {genre}
            </button>
          ))}
        </nav>

        <div className="flex-1" />

        <input
          type="text"
          placeholder="Search…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="font-sans text-[13px] text-foreground bg-transparent border-b border-border outline-none pb-0.5 w-40 placeholder:text-muted-foreground/50 focus:border-primary transition-colors duration-150"
        />

        <span className="font-sans text-[12px] text-muted-foreground/50">
          {filteredTracks.length} track{filteredTracks.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Track list */}
      {filteredTracks.length === 0 ? (
        <div className="py-16 text-center font-sans text-sm text-muted-foreground">
          No tracks found.
        </div>
      ) : (
        filteredTracks.map((track) => <TrackPlayer key={track.id} track={track} />)
      )}
    </div>
  )
}
