import DetailAlbum from '@/views/DetailAlbum/DetailAlbum'

const DetailAlbumPage = ({ params: { id } }: { params: { id: string } }) => (
  <DetailAlbum id={id} />
)

export default DetailAlbumPage
