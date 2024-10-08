'use client'

import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import useSWR from 'swr'
import { Skeleton } from '@mui/material'
import { Fragment } from 'react'
import ENDPOINT from '@/constants/endpoint'
import { AlbumNewReleases } from '@/types/albumNewReleases'

const NewReleased = () => {
  const {
    SPOTIFY: {
      ALBUMS: { NEW_RELEASE },
    },
  } = ENDPOINT
  const params = {
    limit: 1,
    offset: 0,
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading = true } = useSWR<AlbumNewReleases>([
    NEW_RELEASE,
    { params },
  ])

  return (
    <div
      className="flex gap-16 justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-175 flex-wrap lg:flex-nowrap"
      id="section-1"
    >
      {isLoading ? (
        <div className="flex gap-8 w-108">
          <Skeleton className="w-200 h-175" />
          <Skeleton className="w-200 h-175" />
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-col gap-8 w-108">
            <Typography variant="h1" className="pb-8 font-seminormal">
              New Album Released
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button variant="contained" color="primary" className="w-fit">
              <Typography variant="body1" className="normal-case px-4 py-2">
                Listen Now
              </Typography>
            </Button>
          </div>
          <div className="w-167.5 bg-red-200 h-120" />
        </Fragment>
      )}
    </div>
  )
}

export default NewReleased
