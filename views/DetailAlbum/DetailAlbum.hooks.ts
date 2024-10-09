import ENDPOINT from '@/constants/endpoint'
import useSWR from 'swr'
import { Album } from '@/types/album'
import findLargestImage from '@/helpers/findLargestImage'

const useDetailAlbum = ({ id }: { id: string }) => {
  const {
    SPOTIFY: {
      ALBUMS: { ALBUM },
    },
  } = ENDPOINT
  const { data, isLoading } = useSWR<Album>(ALBUM(id))

  const {
    name,
    artists = [],
    release_date,
    label,
    images = [],
    tracks,
  } = data || {}
  const { url } = findLargestImage(images) || {}

  return {
    isLoading,
    name,
    release_date,
    label,
    artists,
    url,
    tracks,
  }
}

export default useDetailAlbum
