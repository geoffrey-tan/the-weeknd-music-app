import { Grid, ResponsiveContext } from 'grommet'
import { useContext, useEffect, useState } from 'react'

import { getTopAlbums } from '../api/client'
import Heading from '../common/Heading'
import AlbumCard from '../components/AlbumCard'

export type AlbumImage = {
  '#text': string
  size: 'small' | 'medium' | 'large' | 'extralarge'
}

type Album = {
  name: string
  image: Array<AlbumImage>
}

function Albums({ albums }: { albums: Array<Album> }) {
  // eslint-disable-next-line no-console
  // console.log('data', albums)

  return (
    <>
      {albums.map(({ name, image }) => (
        <AlbumCard key={name} name={name} imageUrls={image} />
      ))}
    </>
  )
}

function IndexPage() {
  const [albums, setAlbums] = useState<Array<Album> | null>(null)
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
        {albums && <Albums albums={albums} />}
      </Grid>
    </div>
  )
}

export default IndexPage
