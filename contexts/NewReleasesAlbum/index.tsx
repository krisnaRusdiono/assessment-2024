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
  const setDataAlbum = useCallback((dataAlbum: AlbumNewReleases) => {
    setAlbumData(dataAlbum)
  }, [])

  const value = useMemo(
    () => ({
      dataAlbum: albumData,
      setDataAlbum,
    }),
    [albumData, setDataAlbum]
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
