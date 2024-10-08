const ENDPOINT = {
  SPOTIFY: {
    SEARCH: 'search',
    ARTIST: {
      GET_ARTIST: (id: string) => `/artists/${id}`,
      GET_SEVERAL_ARTIST: 'artists',
      GET_ARTIST_ALBUM: (id: string) => `/artists/${id}/albums`,
      GET_ARTIST_TOP_TRACKS: (id: string) => `/artists/${id}/top-tracks`,
      GET_ARTIST_RELATED: (id: string) => `/artists/${id}/related-artists`,
    },
    ALBUMS: {
      ALBUM: (albumId: string) => `v1/albums/${albumId}`,
      NEW_RELEASE: 'v1/browse/new-releases',
      ARTIST_ALBUMS: (artistId: string) => `v1/artists/${artistId}/albums`,
    },
  },
} as const

export default ENDPOINT
