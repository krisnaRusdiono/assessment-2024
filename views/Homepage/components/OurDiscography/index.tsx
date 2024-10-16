'use client'

import Typography from '@/components/base/Typography'
import { ArrowRight, PlayArrow } from '@mui/icons-material'
import { Skeleton } from '@mui/material'
import Link from 'next/link'
import findLargestImage from '@/helpers/findLargestImage'
import useOurDiscography from './index.hooks'

const OurDiscography = () => {
  const { isLoading, artistName, items } = useOurDiscography()

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
        <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap overflow-auto">
          {items.map(({ name, id, images }) => {
            const { url } = findLargestImage(images) || {}
            return (
              <Link href={`detail-album/${id}`} key={id}>
                <div className="w-67.5 flex flex-col bg-white cursor-pointer hover:drop-shadow-xl transition-all [&>div>div]:hover:scale-125 [&>div>div]:hover:opacity-100 [&>span]:hover:scale-110 overflow-hidden">
                  <span
                    className="w-full h-67.5 bg-neutral-900 relative bg-center bg-no-repeat bg-cover transition-all duration-500"
                    style={{
                      backgroundImage: `url("${url}")`,
                    }}
                  />
                  <div className="p-6 flex flex-col justify-between items-start h-41.5">
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" className="flex items-center">
                      Listen Now <ArrowRight />
                    </Typography>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurDiscography
