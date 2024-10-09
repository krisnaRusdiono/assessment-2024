import ENDPOINT from '@/constants/endpoint'
import useSWR from 'swr'
import { AlbumNewReleases } from '@/types/albumNewReleases'

const useOtherRelease = () => {
  const {
    SPOTIFY: {
      ALBUMS: { NEW_RELEASE },
    },
  } = ENDPOINT
  const params = {
    limit: 3,
    offset: Math.floor(Math.random() * 50),
  }

  const { data, isLoading = true } = useSWR<AlbumNewReleases>([
    NEW_RELEASE,
    { params },
  ])

  const { albums } = data || {}
  const { items = [] } = albums || {}

  return {
    isLoading,
    items,
  }
}

export default useOtherRelease
