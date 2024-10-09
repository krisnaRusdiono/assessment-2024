import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { AlbumNewReleases } from '@/types/albumNewReleases'

export interface NewReleasesAlbumContextType {
  dataAlbum?: AlbumNewReleases
  artistId?: string
  artistName?: string
  setDataAlbum: (dataAlbum: AlbumNewReleases) => void
}

const NewReleaseAlbumContext = createContext<
  NewReleasesAlbumContextType | undefined
>(undefined)

const NewReleaseAlbumContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [albumData, setAlbumData] = useState<AlbumNewReleases>()
  const { albums } = albumData || {}
  const { items = [] } = albums || {}
  const { artists = [] } = items.length > 0 ? items[0] : {}
  const { id, name: artistName } = artists.length > 0 ? artists[0] : {}

  const setDataAlbum = useCallback((dataAlbum: AlbumNewReleases) => {
    setAlbumData(dataAlbum)
  }, [])

  const value = useMemo(
    () => ({
      dataAlbum: albumData,
      setDataAlbum,
      artistId: id,
      artistName,
    }),
    [albumData, artistName, id, setDataAlbum]
  )

  return (
    <NewReleaseAlbumContext.Provider value={value}>
      {children}
    </NewReleaseAlbumContext.Provider>
  )
}

const useNewReleaseAlbumContext = () => {
  const context = useContext(NewReleaseAlbumContext)

  if (!context) {
    throw new Error(
      '"useNewReleaseAlbumContext" must be used within "NewReleaseAlbumContextProvider"'
    )
  }

  return context
}

export { NewReleaseAlbumContextProvider, useNewReleaseAlbumContext }
