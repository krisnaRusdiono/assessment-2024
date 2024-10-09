export interface AudioPlayerContextTypes {
  isPlaying: boolean
  musicName: string
  musicId: string
  start: (musicId: string, musicName: string) => void
  togglePause: () => void
  open: boolean
  togglePlayer: () => void
}
