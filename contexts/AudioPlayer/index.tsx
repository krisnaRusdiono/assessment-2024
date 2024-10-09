import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

export interface AudioPlayerContextTypes {
  isPlaying: boolean
  musicName: string
  musicId: string
  start: (musicId: string, musicName: string) => void
  togglePause: () => void
  open: boolean
  togglePlayer: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextTypes | undefined>(
  undefined
)

const AudioPlayerContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [musicName, setMusicName] = useState<string>('')
  const [musicId, setMusicId] = useState<string>('')

  const start = useCallback((musicId: string, musicName: string) => {
    setMusicId(musicId)
    setMusicName(musicName)
    setOpen(true)
    setIsPlaying(true)
  }, [])

  const togglePause = useCallback(() => setIsPlaying(!isPlaying), [isPlaying])

  const togglePlayer = useCallback(() => setOpen(!open), [open])

  const value = useMemo(
    () => ({
      isPlaying,
      musicName,
      musicId,
      open,
      start,
      togglePause,
      togglePlayer,
    }),
    [isPlaying, musicName, musicId, open, start, togglePause, togglePlayer]
  )

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext)

  if (!context) {
    throw new Error(
      '"useAudioPlayerContext" must be used within "AudioPlayerContextProvider"'
    )
  }

  return context
}

export { AudioPlayerContextProvider, useAudioPlayerContext }
