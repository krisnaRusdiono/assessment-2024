import {
  Devices,
  Pause,
  Queue,
  RepeatOnOutlined,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeUp,
} from '@mui/icons-material'
import Typography from '@/components/base/Typography'
import { Drawer, Slider } from '@mui/material'
import { useEffect, useState } from 'react'
import { useAudioPlayerContext } from '@/contexts/AudioPlayer'
import Button from '@/components/base/Button'

const AudioPlayer = () => {
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

  return (
    <Drawer open={open} anchor="bottom" onClose={togglePlayer}>
      <div className="min-w-screen w-auto bg-neutral-100 flex justify-between items-center p-4 box-border gap-12">
        <div className="w-96 flex flex-col justify-between">
          {musicName && (
            <Typography variant="h6" className="font-seminbold">
              {musicName}
            </Typography>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-center items-center gap-8">
            <Shuffle />
            <SkipPrevious />
            <Button
              variant="text"
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
              onClick={togglePause}
            >
              <Pause className="fill-neutral-900" />
            </Button>
            <SkipNext />
            <RepeatOnOutlined />
          </div>
          <div className="flex gap-4 items-center">
            <Typography className="text-nowrap">0:00</Typography>
            <Slider
              aria-label="Volume"
              value={valueSlider}
              onChange={handleChangeSlider}
            />
            <Typography className="text-nowrap">3:42</Typography>
          </div>
        </div>
        <div className="flex gap-4 box-border w-96">
          <Queue />
          <Devices />
          <VolumeUp />
          <Slider value={valueVolume} onChange={handleChangeVolume} />
        </div>
      </div>
    </Drawer>
  )
}

export default AudioPlayer
