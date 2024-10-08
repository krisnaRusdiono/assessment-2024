import AlbumCover from './components/AlbumCover'
import TrackList from './components/TrackList'
import OtherRelease from './components/OtherRelease'
import NewsLetter from './components/NewsLetter'

const DetailAlbum = ({ id }: { id: string }) => (
  <>
    <AlbumCover id={id} />
    <TrackList />
    <OtherRelease />
    <NewsLetter />
  </>
)

export default DetailAlbum
