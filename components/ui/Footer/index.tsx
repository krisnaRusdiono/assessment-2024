import Typography from '@/components/base/Typography'

const Footer = () => (
  <div className="bg-white flex justify-center gap-8 p-8">
    <div className="w-full box-border flex gap-10 justify-end">
      <Typography
        variant="body1"
        className="text-2xl font-semibold text-center"
      >
        TRADE
      </Typography>
      <div className="flex flex-col gap-4 py-3 max-w-120">
        <Typography variant="body2" className="font-semibold">
          Latest Blog Post
        </Typography>
        <Typography variant="h6" className="text-2xl">
          Ready to get started?
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </div>
    <div className="border border-neutral-500 border-solid" />
    <div className="w-full box-border flex gap-10">
      <div className="font-semibold py-3 flex flex-col gap-4">
        <Typography variant="body2" className="font-semibold">
          Product
        </Typography>
        <div className="flex flex-col gap-2 pb-8">
          {new Array(5).fill(null).map((_, index) => (
            <Typography variant="body2" key={index}>
              Product
            </Typography>
          ))}
        </div>
        <Typography variant="body2">© 2010 — 2020</Typography>
      </div>
      <div className="font-semibold py-3 flex flex-col gap-4">
        <Typography variant="body2" className="font-semibold">
          Company
        </Typography>
        <div className="flex flex-col gap-2 pb-8">
          {new Array(5).fill(null).map((_, subIndex) => (
            <Typography variant="body2" key={subIndex}>
              Company
            </Typography>
          ))}
        </div>
        <Typography variant="body2">Privacy — Terms</Typography>
      </div>
    </div>
  </div>
)

export default Footer
