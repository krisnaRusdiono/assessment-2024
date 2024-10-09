import { useNewReleaseAlbumContext } from '@/contexts/NewReleasesAlbum'
import ENDPOINT from '@/constants/endpoint'
import useSWR from 'swr'
import { ArtistAlbums } from '@/types/artistAlbums'

const useOurDiscography = () => {
  const { artistId = '', artistName = '' } = useNewReleaseAlbumContext()
  const {
    SPOTIFY: {
      ALBUMS: { ARTIST_ALBUMS },
    },
  } = ENDPOINT
  const params = {
    limit: 4,
    offset: 0,
  }
  const { data, isLoading } = useSWR<ArtistAlbums>([
    ARTIST_ALBUMS(artistId),
    { params },
  ])
  const { items = [] } = data || {}

  return {
    isLoading,
    artistName,
    items,
  }
}

export default useOurDiscography
