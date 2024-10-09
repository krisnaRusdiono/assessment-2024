export interface SearchArtistData {
  artists: Artists
}

interface Artists {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: string | null
  total: number
}

interface Item {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string | null
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}

interface ExternalUrls {
  spotify: string
}

interface Followers {
  href: string | null
  total: number
}

interface Image {
  height: number
  url: string
  width: number
}
