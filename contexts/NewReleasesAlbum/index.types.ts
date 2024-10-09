import { AlbumNewReleases } from '@/types/albumNewReleases'

export interface NewReleasesAlbumContextType {
  dataAlbum?: AlbumNewReleases
  artistId?: string
  artistName?: string
  setDataAlbum: (dataAlbum: AlbumNewReleases) => void
}
