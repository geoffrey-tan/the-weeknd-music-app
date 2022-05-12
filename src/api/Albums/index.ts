import client from '../client'

const ARTIST_MBID = 'b49b81cc-d5b7-4bdd-aadb-385df8de69a6' // Drake

export type Track = {
  duration: number
  url: string
  name: string
  '@attr': {
    rank: number
  }
}

export type Album = {
  name: string
  tracks: {
    track: Array<Track>
  }
}

const getAlbum = (mbid?: string) => client('album.getInfo', mbid)
const getTopAlbums = () => client('artist.gettopalbums', ARTIST_MBID)

export { getAlbum, getTopAlbums }
