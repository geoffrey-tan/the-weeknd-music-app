import { Grid, ResponsiveContext } from 'grommet'
import { useContext } from 'react'

import AlbumCard from '../components/AlbumCard'

function IndexPage() {
  const size = useContext(ResponsiveContext)

  return (
    <div>
      <h1>Overview</h1>
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </Grid>
    </div>
  )
}

export default IndexPage
