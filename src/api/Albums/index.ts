import client from '../client'

const ARTIST_MBID = 'b49b81cc-d5b7-4bdd-aadb-385df8de69a6' // Drake

type Track = {
  duration: number
  url: string
  name: string
  '@attr': {
    rank: number
  }
}

type Album = {
  name: string
  tracks: {
    track: Array<Track>
  }
}

type AlbumImage = {
  '#text': string
  size: 'small' | 'medium' | 'large' | 'extralarge'
}

type TopAlbum = {
  name: string
  image: Array<AlbumImage>
  mbid: string
  url: string
}

const getAlbum = (mbid?: string) => client('album.getInfo', mbid)
const getTopAlbums = () => client('artist.gettopalbums', ARTIST_MBID)

export type { Album, AlbumImage, TopAlbum, Track }
export { getAlbum, getTopAlbums }
