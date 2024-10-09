import { useNewReleaseAlbumContext } from '@/contexts/NewReleasesAlbum'
import ENDPOINT from '@/constants/endpoint'
import useSWR from 'swr'
import { AlbumNewReleases } from '@/types/albumNewReleases'
import { useEffect } from 'react'

const useNewReleased = () => {
  const { setDataAlbum } = useNewReleaseAlbumContext()
  const {
    SPOTIFY: {
      ALBUMS: { NEW_RELEASE },
    },
  } = ENDPOINT
  const params = {
    limit: 1,
    offset: 0,
  }

  const { data, isLoading = true } = useSWR<AlbumNewReleases>([
    NEW_RELEASE,
    { params },
  ])

  const { albums } = data || {}
  const { items = [] } = albums || {}

  useEffect(() => {
    if (data) setDataAlbum(data)
  }, [data, setDataAlbum])

  return {
    isLoading,
    items,
  }
}

export default useNewReleased
