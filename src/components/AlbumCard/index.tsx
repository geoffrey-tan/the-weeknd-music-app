import { Button, Card, CardFooter, CardHeader, Image, Text } from 'grommet'
import { Favorite } from 'grommet-icons'
import { Link } from 'react-router-dom'

import getId from '../../lib/getId'
import type { AlbumImage } from '../../pages'

type AlbumCardProps = {
  name: string
  imageUrls: Array<AlbumImage>
}

function AlbumCard({ name, imageUrls }: AlbumCardProps) {
  return (
    <Link to={`album/${getId(name)}`}>
      <Card height="small" width="medium" background="light-1">
        <Image fit="cover" src={imageUrls[3]['#text']} alt={name} />
        <CardHeader pad="medium">
          <Text truncate>{name}</Text>
        </CardHeader>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Button icon={<Favorite color="red" />} hoverIndicator />
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AlbumCard
