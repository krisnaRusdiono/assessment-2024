'use client'

import Typography from '@/components/base/Typography'
import { ArrowRight, PlayArrow } from '@mui/icons-material'
import useSWR from 'swr'
import ENDPOINT from '@/constants/endpoint'
import { useNewReleaseAlbumContext } from '@/contexts/NewReleasesAlbum'
import { ArtistAlbums } from '@/types/artistAlbums'
import { Skeleton } from '@mui/material'
import Link from 'next/link'

const OurDiscography = () => {
  const { artistId = '', artistName = '' } = useNewReleaseAlbumContext()
  const {
    SPOTIFY: {
      ALBUMS: { ARTIST_ALBUMS },
    },
  } = ENDPOINT
  const params = {
    limit: 4,
    offset: 0,
  }
  const { data, isLoading } = useSWR<ArtistAlbums>([
    ARTIST_ALBUMS(artistId),
    { params },
  ])
  const { items = [] } = data || {}

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center items-center w-full px-12 py-12 lg:py-32 bg-[#b0b0b0] h-auto flex-wrap lg:flex-nowrap"
        id="section-2"
      >
        <div className="flex flex-col gap-12 text-center w-full">
          <div className="flex flex-col gap-4">
            <Typography variant="h5" className="font-seminormal">
              Our Discography
            </Typography>
            <Skeleton className="w-full" />
          </div>
          <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap">
            {new Array(4)
              .fill({ title: 'Special Feature', id: 'card-discography' })
              .map(({ title }, index) => (
                <div
                  className="w-67.5 flex flex-col bg-white cursor-pointer hover:drop-shadow-xl transition-all [&>div>div]:hover:scale-125"
                  key={`${title}-${index}`}
                >
                  <div className="w-full h-67.5 bg-neutral-900 relative">
                    <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 h-16 w-16 rounded-lg bg-white transition-all" />
                  </div>
                  <div className="p-6 flex flex-col justify-between items-start h-41.5">
                    <Typography variant="h6">
                      <Skeleton className="w-full" />
                    </Typography>
                    <Typography variant="body2" className="flex items-center">
                      <Skeleton className="w-full" />
                    </Typography>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-full px-12 py-12 lg:py-32 bg-[#b0b0b0] h-auto flex-wrap lg:flex-nowrap"
      id="section-2"
    >
      <div className="flex flex-col gap-12 text-center w-full">
        <div className="flex flex-col gap-4">
          <Typography variant="h5" className="font-seminormal">
            {`${artistName} Discography`}
          </Typography>
          <Typography variant="h6">
            {`Check ${artistName} latest albums and single below so you wont missing out`}
          </Typography>
        </div>
        <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap">
          {items.map(({ name, id, images }) => {
            const { url } = images.reduce(
              (maxImage, currentImage) =>
                currentImage.height > maxImage.height ? currentImage : maxImage,
              images[0]
            )
            return (
              <div
                className="w-67.5 flex flex-col bg-white cursor-pointer hover:drop-shadow-xl transition-all [&>div>div]:hover:scale-125 [&>div>div]:hover:opacity-100"
                key={id}
              >
                <div
                  className="w-full h-67.5 bg-neutral-900 relative bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("${url}")`,
                  }}
                >
                  <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 h-16 w-16 rounded-lg bg-white transition-all flex items-center justify-center opacity-25">
                    <PlayArrow className="w-10 h-10" />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between items-start h-41.5">
                  <Typography variant="h6">{name}</Typography>
                  <Link href={`detail-album/${id}`}>
                    <Typography variant="body2" className="flex items-center">
                      Listen Now <ArrowRight />
                    </Typography>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurDiscography
