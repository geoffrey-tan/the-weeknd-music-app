import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Album, getAlbum, Track } from '../api/Albums'
import BackButton from '../common/BackButton'
import List, { Item } from '../common/List'

function Tracks({ tracks }: { tracks: Array<Track> }) {
  return (
    <List>
      {tracks.map(({ name, '@attr': { rank } }) => (
        <Item key={rank}>{name}</Item>
      ))}
    </List>
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
    <>
      <BackButton />
      <h1>{album && album.name}</h1>
      {album && <Tracks tracks={album.tracks.track} />}
    </>
  )
}

export default DetailPage
