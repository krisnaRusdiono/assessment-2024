'use client'

import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import { Skeleton } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import { AlbumCoverProps } from './index.types'
import { useAudioPlayerContext } from '@/contexts/AudioPlayer'

const AlbumCover = ({
  isLoading,
  name,
  release_date,
  label,
  artists,
  url,
}: AlbumCoverProps) => {
  const { start } = useAudioPlayerContext()

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
        className="w-full bg-black h-150 flex items-center bg-no-repeat bg-cover bg-center justify-center p-4 [&>div]:hover:scale-125 [&>div]:duration-500 [&>div]:transition-all [&>div]:hover:opacity-70"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      >
        <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center opacity-10">
          <Button
            variant="text"
            onClick={() => start(String(name), String(name))}
          >
            <PlayArrow className="w-24 h-24" />
          </Button>
        </div>
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
            <Button variant="outlined" color="secondary" className="w-full">
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
