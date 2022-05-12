import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Album, getAlbum, Track } from '../api/Albums'
import BackButton from '../common/BackButton'

function Tracks({ tracks }: { tracks: Array<Track> }) {
  return (
    <>
      {tracks.map(({ name, '@attr': { rank } }) => (
        <div key={rank}>{name}</div>
      ))}
    </>
  )
}

function DetailPage() {
  const [album, setAlbum] = useState<Album | null>(null)
  const { mbid } = useParams()

  useEffect(() => {
    async function fetchAlbum() {
      const response = await getAlbum(mbid)

      setAlbum(response.album)
    }

    fetchAlbum()
  }, [mbid])

  return (
    <div>
      <BackButton />
      <h1>{album && album.name}</h1>

      {album && <Tracks tracks={album.tracks.track} />}
      {/* <ul>
        <li>Track Name</li>
      </ul> */}
    </div>
  )
}

export default DetailPage
