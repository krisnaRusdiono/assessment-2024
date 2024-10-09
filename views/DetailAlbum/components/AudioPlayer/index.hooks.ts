import { useAudioPlayerContext } from '@/contexts/AudioPlayer'
import { useEffect, useState } from 'react'

const useAudioPlayer = () => {
  const { musicName, togglePause, open, togglePlayer, isPlaying } =
    useAudioPlayerContext()
  const [valueSlider, setValueSlider] = useState<number>(0)
  const [valueVolume, setValueVolume] = useState<number>(70)

  const handleChangeSlider = ({ target }: Event) => {
    const { value } = target as unknown as HTMLInputElement
    setValueSlider(Number(value))
  }

  const handleChangeVolume = ({ target }: Event) => {
    const { value } = target as unknown as HTMLInputElement
    setValueVolume(Number(value))
  }

  useEffect(() => {
    const timeBox = 100
    let time = 0
    const timer = setInterval(() => {
      if (!isPlaying) return

      if (time <= timeBox) {
        time += 1
        setValueSlider(time)
        return
      }

      clearInterval(timer)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [isPlaying])

  return {
    open,
    togglePlayer,
    musicName,
    togglePause,
    valueSlider,
    valueVolume,
    handleChangeSlider,
    handleChangeVolume,
  }
}

export default useAudioPlayer
