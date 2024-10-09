'use client'

import AlbumCover from './components/AlbumCover'
import TrackList from './components/TrackList'
import OtherRelease from './components/OtherRelease'
import NewsLetter from './components/NewsLetter'
import useDetailAlbum from './DetailAlbum.hooks'

const DetailAlbum = ({ id }: { id: string }) => {
  const { isLoading, name, release_date, label, artists, url, tracks } =
    useDetailAlbum({ id })

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
