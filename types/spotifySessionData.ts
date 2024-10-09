export interface SpotifySessionData {
  session: SpotifySessionData
}

export interface SpotifySessionData {
  user: SpotifyUser
  expires: string
  accessToken: string
}

export interface SpotifyUser {
  name: string
  email: string
  image: string
}
