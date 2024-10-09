import { Artist } from '@/types/album'

export interface AlbumCoverProps {
  isLoading: boolean
  name?: string
  release_date?: string
  label?: string
  artists: Artist[]
  url: string
}
