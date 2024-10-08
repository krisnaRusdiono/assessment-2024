export interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  uri: string
  artists: Artist[]
  tracks: Tracks
  copyrights: Copyright[]
  external_ids: ExternalIds
  genres: any[]
  label: string
  popularity: number
}

interface ExternalUrls {
  spotify: string
}

interface Image {
  url: string
  height: number
  width: number
}

interface Artist {
  external_urls: ExternalUrls2
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface ExternalUrls2 {
  spotify: string
}

interface Tracks {
  href: string
  limit: number
  next: any
  offset: number
  previous: any
  total: number
  items: Item[]
}

interface Item {
  artists: Artist2[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls4
  href: string
  id: string
  name: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

interface Artist2 {
  external_urls: ExternalUrls3
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface ExternalUrls3 {
  spotify: string
}

interface ExternalUrls4 {
  spotify: string
}

interface Copyright {
  text: string
  type: string
}

interface ExternalIds {
  upc: string
}
