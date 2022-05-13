const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_API_KEY}&format=json`

type Method = 'album.getInfo' | 'artist.gettopalbums'

const client = async (method: Method, mbid?: string) => {
  const url = `${BASE_URL}&method=${method}${mbid ? `&mbid=${mbid}` : ''}`
  const response = await fetch(url)
  const json = await response.json()

  return json
}

export default client
