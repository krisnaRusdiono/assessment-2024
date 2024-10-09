import DetailAlbum from '@/views/DetailAlbum'

const DetailAlbumPage = ({ params: { id } }: { params: { id: string } }) => (
  <DetailAlbum id={id} />
)

export default DetailAlbumPage
