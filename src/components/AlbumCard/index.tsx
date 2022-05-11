import { Button, Card, CardFooter, CardHeader, Image } from 'grommet'
import { Favorite } from 'grommet-icons'

import type { AlbumImage } from '../../pages'

type AlbumCardProps = {
  name: string
  imageUrls: Array<AlbumImage>
}

function AlbumCard({ name, imageUrls }: AlbumCardProps) {
  return (
    <Card height="small" width="medium" background="light-1">
      <Image fit="cover" src={imageUrls[3]['#text']} alt={name} />
      <CardHeader pad="medium">{name}</CardHeader>
      {/* <CardBody pad="medium">Year: 2022</CardBody> */}
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
      </CardFooter>
    </Card>
  )
}

export default AlbumCard
