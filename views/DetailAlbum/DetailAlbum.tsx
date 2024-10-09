'use client'

import AlbumCover from './components/AlbumCover'
import TrackList from './components/TrackList'
import OtherRelease from './components/OtherRelease'
import NewsLetter from './components/NewsLetter'
import ENDPOINT from '@/constants/endpoint'
import useSWR from 'swr'
import { Album } from '@/types/album'

const DetailAlbum = ({ id }: { id: string }) => {
  const {
    SPOTIFY: {
      ALBUMS: { ALBUM },
    },
  } = ENDPOINT
  const { data, isLoading } = useSWR<Album>(ALBUM(id))

  const {
    name,
    artists = [],
    release_date,
    label,
    images = [],
    tracks,
  } = data || {}
  const { url } =
    images.reduce(
      (maxImage, currentImage) =>
        currentImage.height > maxImage.height ? currentImage : maxImage,
      images[0]
    ) || {}

  return (
    <>
      <AlbumCover
        isLoading={isLoading}
        name={name}
        release_date={release_date}
        label={label}
        artists={artists}
        url={url}
      />
      <TrackList isLoading={isLoading} tracks={tracks} />
      <OtherRelease />
      <NewsLetter />
    </>
  )
}

export default DetailAlbum
