import Typography from '@/components/base/Typography'
import { ArrowRight } from '@mui/icons-material'

const OurDiscography = () => (
  <div className="flex flex-col justify-center items-center w-full p-12 bg-[#b0b0b0] h-auto lg:h-205 flex-wrap lg:flex-nowrap">
    <div className="flex flex-col gap-12 text-center">
      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="font-seminormal">
          Our Discography
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div className="flex gap-8">
        {new Array(4)
          .fill({ title: 'Special Feature', id: 'card-discography' })
          .map(({ title }, index) => (
            <div
              className="w-67.5 flex flex-col bg-white"
              key={`${title}-${index}`}
            >
              <div className="w-full h-67.5 bg-neutral-900 relative">
                <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 h-16 w-16 rounded-lg bg-white" />
              </div>
              <div className="p-6 flex flex-col justify-between items-start h-41.5">
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" className="flex items-center">
                  Listen Now <ArrowRight />
                </Typography>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default OurDiscography
