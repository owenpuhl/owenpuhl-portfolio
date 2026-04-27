import TrackPlayer from './TrackPlayer'
import { TRACKS } from '../data/tracks'

export default function TrackList() {
  return (
    <div>
      {TRACKS.map((track) => (
        <TrackPlayer key={track.id} track={track} />
      ))}
    </div>
  )
}
