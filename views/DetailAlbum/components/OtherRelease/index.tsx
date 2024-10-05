import Typography from '@/components/base/Typography'

const OtherRelease = () => (
  <div className="w-full flex flex-col py-14 h-auto min-h-205.25 justify-between items-center">
    <Typography variant="h2" className="font-semibold">
      Other Releases
    </Typography>
    <div className="flex gap-6 flex-wrap lg:flex-nowrap">
      {new Array(3).fill(null).map((_, index) => (
        <div key={index} className="flex flex-col gap-6 w-92.5 max-w-92.5">
          <div className="w-92.5 h-92.5 bg-black" />
          <div className="flex flex-col gap-2">
            <Typography variant="h6" className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Typography variant="body2">Listen Now</Typography>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default OtherRelease
