const ARTIST_MBID = 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9' // The Weeknd
const BASE_URL = `https://ws.audioscrobbler.com/2.0/?mbid=${ARTIST_MBID}&api_key=${process.env.REACT_APP_API_KEY}&format=json`

type Method = 'artist.gettopalbums'

const client = async (method: Method) => {
  const response = await fetch(`${BASE_URL}&method=${method}`)
  const json = await response.json()

  return json
}

const getTopAlbums = () => {
  const method = 'artist.gettopalbums'
  return client(method)
}

export { getTopAlbums }
export default client
