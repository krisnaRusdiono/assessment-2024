import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'

const AlbumCover = () => (
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
          Album Title
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="h6">Artist Name</Typography>
          <Typography variant="h6">Label</Typography>
          <Typography variant="h6">Release Year</Typography>
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

export default AlbumCover
