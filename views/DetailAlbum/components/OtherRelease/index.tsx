import Typography from '@/components/base/Typography'
import { Skeleton } from '@mui/material'
import Link from 'next/link'
import findLargestImage from '@/helpers/findLargestImage'
import useOtherRelease from './index.hooks'

const OtherRelease = () => {
  const { isLoading, items } = useOtherRelease()

  return (
    <div
      className="w-full flex flex-col py-14 h-auto min-h-205.25 justify-between items-center"
      id="section-3"
    >
      <Typography variant="h2" className="font-semibold">
        Other Releases
      </Typography>
      {isLoading ? (
        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
          {new Array(3).fill(null).map((_, index) => (
            <div key={index} className="flex flex-col gap-6 w-92.5 max-w-92.5">
              <div className="w-92.5 h-92.5 bg-black" />
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-2xl">
                  <Skeleton />
                </Typography>
                <Typography variant="body2">
                  <Skeleton />
                </Typography>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
          {items.length ? (
            items.map(({ id, images, name }) => {
              const { url } = findLargestImage(images) || {}

              return (
                <div
                  key={id}
                  className="flex flex-col gap-6 w-92.5 max-w-92.5 [&>span]:hover:scale-110 overflow-hidden"
                >
                  <span
                    className="w-92.5 h-92.5 bg-black bg-center bg-no-repeat bg-cover overflow-hidden transition-all duration-500"
                    style={{
                      backgroundImage: `url("${url}")`,
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <Typography variant="h6" className="text-2xl">
                      {name}
                    </Typography>
                    <Link href={`/detail-album/${id}`}>
                      <Typography variant="body2">Listen Now</Typography>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="flex flex-col gap-6 w-92.5 max-w-92.5">
              <div className="w-92.5 h-92.5 bg-black" />
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-2xl">
                  -
                </Typography>
                <Typography variant="body2">-</Typography>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default OtherRelease
