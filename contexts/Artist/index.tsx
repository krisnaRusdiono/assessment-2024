import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import ARTIST_LIST from '@/constants/artistList'
import searchArtistNormalizers from '@/normalizers/searchArtist'
import { ArtistContextTypes } from './index.types'

const ArtistContext = createContext<ArtistContextTypes | undefined>(undefined)

const ArtistContextProvider = ({ children }: { children: ReactNode }) => {
  const artistList = useMemo(() => searchArtistNormalizers(ARTIST_LIST), [])
  const [selectedArtist, setSelectedArtist] = useState<string>(
    artistList[0].value
  )
  const handleSelectedArtistChange = useCallback((artistId: string) => {
    setSelectedArtist(artistId)
  }, [])

  const value = useMemo<ArtistContextTypes>(
    () => ({
      selectedArtist: selectedArtist,
      onChangeArtist: handleSelectedArtistChange,
    }),
    [handleSelectedArtistChange, selectedArtist]
  )

  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  )
}

const useArtistContext = () => {
  const context = useContext(ArtistContext)

  if (!context) {
    throw new Error(
      '"useArtistContext" must be used within "ArtistContextProvider"'
    )
  }

  return context
}

export { ArtistContextProvider, useArtistContext }
