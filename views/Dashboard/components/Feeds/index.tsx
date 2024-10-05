import Typography from '@/components/base/Typography'

const Feeds = () => (
  <div className="flex flex-col justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-67 flex-wrap lg:flex-nowrap">
    <div className="flex flex-col gap-8 text-center">
      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="font-seminormal">
          Follow us here!
        </Typography>
      </div>
      <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center">
        {new Array(6).fill(null).map((_, index) => (
          <div
            className="w-20 h-20 rounded-full bg-black cursor-pointer hover:drop-shadow-lg transition-all"
            key={index}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Feeds
