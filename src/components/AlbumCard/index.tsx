import { Button, Card, CardFooter, CardHeader, Image, Text } from 'grommet'
import { Favorite } from 'grommet-icons'
import { Link } from 'react-router-dom'

import { AlbumImage } from '../../api/Albums'

function Anchor({
  mbid,
  url,
  children,
}: {
  mbid: string
  url: string
  children: React.ReactNode
}) {
  return mbid ? (
    <Link to={`album/${mbid}`}>{children}</Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

type AlbumCardProps = {
  name: string
  imageUrls: Array<AlbumImage>
  mbid: string
  url: string
}

function AlbumCard({ name, imageUrls, mbid, url }: AlbumCardProps) {
  return (
    <Anchor mbid={mbid} url={url}>
      <Card height="small" width="medium" background="light-1">
        <Image fit="cover" src={imageUrls[3]['#text']} alt={name} />
        <CardHeader pad="medium">
          <Text truncate>{name}</Text>
        </CardHeader>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Button icon={<Favorite color="red" />} hoverIndicator />
        </CardFooter>
      </Card>
    </Anchor>
  )
}

export default AlbumCard
