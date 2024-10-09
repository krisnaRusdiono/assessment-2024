'use client'

import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import { Skeleton } from '@mui/material'
import Link from 'next/link'
import findLargestImage from '@/helpers/findLargestImage'
import useNewReleased from './index.hooks'

const NewReleased = () => {
  const { isLoading, items } = useNewReleased()

  if (isLoading) {
    return (
      <div
        className="flex gap-16 justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-175 flex-wrap lg:flex-nowrap"
        id="section-1"
      >
        <div className="flex gap-8 w-108">
          <Skeleton className="w-200 h-175" />
          <Skeleton className="w-200 h-175" />
        </div>
      </div>
    )
  }

  return (
    <>
      {items.length ? (
        items.map(({ artists, name, release_date, id, images }) => {
          const { url } = findLargestImage(images) || {}
          return (
            <div
              key={id}
              className="flex gap-16 justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-175 flex-wrap lg:flex-nowrap"
              id="section-1"
            >
              <div className="flex flex-col gap-8 w-108">
                <Typography variant="h1" className="pb-8 font-seminormal">
                  New Album Released
                </Typography>
                <Typography variant="h6">
                  {`
                      From ${artists.map((value) => value.name).join(', ')} with new albums named "${name}"
                      come to music industry on ${new Date(release_date).toDateString()}, check them NOW!
                    `}
                </Typography>
                <Link href={`detail-album/${id}`}>
                  <Button variant="contained" color="primary" className="w-fit">
                    <Typography
                      variant="body1"
                      className="normal-case px-4 py-2"
                    >
                      Listen Now
                    </Typography>
                  </Button>
                </Link>
              </div>
              <div
                className="w-167.5 bg-red-200 h-120 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${url}")`,
                }}
              />
            </div>
          )
        })
      ) : (
        <>
          <div
            className="flex gap-16 justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-175 flex-wrap lg:flex-nowrap"
            id="section-1"
          >
            <div className="flex flex-col gap-8 w-108">
              <Typography variant="h1" className="pb-8 font-seminormal">
                New Album Released
              </Typography>
              <Typography variant="h6">-</Typography>
              <Button variant="contained" color="primary" className="w-fit">
                <Typography variant="body1" className="normal-case px-4 py-2">
                  -
                </Typography>
              </Button>
            </div>
            <div className="w-167.5 bg-neutral-600 h-120 bg-cover bg-center bg-no-repeat" />
          </div>
        </>
      )}
    </>
  )
}

export default NewReleased
