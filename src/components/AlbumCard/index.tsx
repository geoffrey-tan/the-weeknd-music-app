import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet'
import { Favorite } from 'grommet-icons'

function AlbumCard() {
  return (
    <Card height="small" width="medium" background="light-1">
      album cover
      <CardHeader pad="medium">Album Name</CardHeader>
      <CardBody pad="medium">Year: 2022</CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
      </CardFooter>
    </Card>
  )
}

export default AlbumCard
