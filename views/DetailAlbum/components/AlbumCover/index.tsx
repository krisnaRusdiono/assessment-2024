'use client'

import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import { Skeleton } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import { AlbumCoverProps } from './index.types'
import { useAudioPlayerContext } from '@/contexts/AudioPlayer'
import handleShare from '@/helpers/shareAction'

const AlbumCover = ({
  isLoading,
  name,
  release_date,
  label,
  artists,
  url,
}: AlbumCoverProps) => {
  const { start, isPlaying } = useAudioPlayerContext()
  const handleClickShare = async (data: ShareData) => {
    await handleShare(data)
  }

  return isLoading ? (
    <div
      className="flex flex-wrap lg:flex-nowrap pp-12 bg-[#f2f2f2]"
      id="section-1"
    >
      <div className="w-full bg-black h-150 flex items-center justify-center p-4">
        <div className="w-80 h-80 bg-white rounded-md"></div>
      </div>
      <div className="w-full h-150 flex items-center justify-center p-40.">
        <div className="w-80 h-80 flex flex-col gap-8 justify-center">
          <Typography variant="h2" className="font-bold">
            <Skeleton />
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="h6">
              <Skeleton />
            </Typography>
            <Typography variant="h6">
              <Skeleton />
            </Typography>
            <Typography variant="h6">
              <Skeleton />
            </Typography>
          </div>
          <div className="flex gap-4">
            <Button variant="outlined" color="secondary" className="w-full">
              <Skeleton />
            </Button>
            <Button variant="contained" color="primary" className="w-full">
              <Skeleton />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-wrap lg:flex-nowrap pp-12 bg-[#f2f2f2]"
      id="section-1"
    >
      <div
        className="w-full bg-black h-150 flex items-center bg-no-repeat bg-cover bg-center justify-center p-4 [&>button]:hover:scale-125 [&>button]:duration-500 [&>button]:transition-all [&>button]:hover:opacity-80"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      >
        <Button
          variant="text"
          onClick={() =>
            start(`${String(name)} - MIX`, `${String(name)} - MIX`)
          }
          className="opacity-20 duration-500 transition-all rounded-full bg-neutral-50"
        >
          {isPlaying ? (
            <Pause className="w-24 h-24 fill-neutral-900" />
          ) : (
            <PlayArrow className="w-24 h-24 fill-neutral-900" />
          )}
        </Button>
      </div>
      <div className="w-full h-150 flex items-center justify-center p-40.">
        <div className="w-80 h-80 flex flex-col gap-8 justify-center">
          <Typography variant="h2" className="font-bold">
            {name}
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="h6">
              {artists.map((item) => item.name).join(', ')}
            </Typography>
            <Typography variant="h6">{label}</Typography>
            <Typography variant="h6">
              {release_date ? new Date(release_date).getFullYear() : ''}
            </Typography>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outlined"
              color="secondary"
              className="w-full"
              onClick={() =>
                handleClickShare({
                  title: `${name} - ${artists.map((i) => i.name).join(', ')}`,
                  text: `Check out this now!`,
                })
              }
            >
              Share
            </Button>
            <Button variant="contained" color="primary" className="w-full">
              Listen Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumCover
