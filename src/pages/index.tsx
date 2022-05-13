import { Grid, ResponsiveContext, Spinner } from 'grommet'
import { useContext, useEffect, useState } from 'react'

import { getTopAlbums, TopAlbum } from '../api/Albums'
import Heading from '../common/Heading'
import AlbumCard from '../components/AlbumCard'

function Albums({ albums }: { albums: Array<TopAlbum> }) {
  // eslint-disable-next-line no-console
  console.log('data', albums)

  return (
    <>
      {albums.map(({ name, image, mbid, url }) => (
        <AlbumCard
          key={name}
          name={name}
          imageUrls={image}
          mbid={mbid}
          url={url}
        />
      ))}
    </>
  )
}

function IndexPage() {
  const [albums, setAlbums] = useState<Array<TopAlbum> | null>(null)
  const size = useContext(ResponsiveContext)

  useEffect(() => {
    async function fetchAlbums() {
      const response = await getTopAlbums()

      setAlbums(response.topalbums.album)
    }

    fetchAlbums()
  }, [])

  return (
    <div>
      <Heading>The Weeknd Top Albums</Heading>
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        {albums ? <Albums albums={albums} /> : <Spinner />}
      </Grid>
    </div>
  )
}

export default IndexPage
