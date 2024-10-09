'use client'

import Typography from '@/components/base/Typography'
import useFeeds from './index.hooks'

const Feeds = () => {
  const { artistName, listIcons } = useFeeds()

  return (
    <div
      className="flex flex-col justify-center items-center w-full p-12 bg-[#f2f2f2] h-auto lg:h-67 flex-wrap lg:flex-nowrap"
      id="section-3"
    >
      <div className="flex flex-col gap-8 text-center">
        <div className="flex flex-col gap-4">
          <Typography variant="h5" className="font-seminormal">
            {`Follow ${artistName} here!`}
          </Typography>
        </div>
        <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center">
          {listIcons.map((_, index) => (
            <div
              className="w-20 h-20 rounded-full cursor-pointer hover:drop-shadow-lg transition-all flex items-center justify-center [&>*]:w-9 [&>*]:h-9 [&>*]:fill-neutral-50 bg-black [&>*]:hover:scale-125 [&>*]:transition-all [&>*]:duration-500"
              key={index}
            >
              {listIcons[index].element}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feeds
