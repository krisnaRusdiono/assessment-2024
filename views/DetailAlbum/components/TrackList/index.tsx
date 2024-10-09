import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import { PlayArrow } from '@mui/icons-material'
import { Tracks } from '@/types/album'
import msToTime from '@/helpers/msToTime'
import { Skeleton } from '@mui/material'

const TrackList = ({
  tracks,
  isLoading,
}: {
  tracks?: Tracks
  isLoading: boolean
}) => {
  const { items = [] } = tracks || {}
  return (
    <div
      className="w-full h-auto min-h-124 bg-[#d9d9d9] flex items-center justify-center px-8 py-12"
      id="section-2"
    >
      <div className="flex flex-col gap-4">
        <Typography variant="h2" className="font-semibold">
          Track List
        </Typography>
        {isLoading ? (
          <>
            {new Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-auto md:w-167.5 justify-between"
              >
                <div className="flex gap-4 items-center">
                  <Typography variant="h6">
                    <Skeleton />
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="bg-transparent"
                  >
                    <PlayArrow />
                  </Button>
                  <Typography variant="h6">
                    <Skeleton />
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <Typography variant="h6" className="w-full text-end">
                    <Skeleton />
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="bg-transparent px-12"
                  >
                    <Skeleton />
                  </Button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col gap-2">
            {items.length ? (
              items.map(({ name, duration_ms }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 w-auto md:w-167.5 justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <Typography variant="h6">{index + 1}</Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className="bg-transparent"
                    >
                      <PlayArrow />
                    </Button>
                    <Typography variant="h6">{name}</Typography>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Typography variant="h6" className="w-full text-end">
                      {msToTime(duration_ms)}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className="bg-transparent px-12"
                    >
                      Share
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-4 w-auto md:w-167.5 justify-between">
                <div className="flex gap-4 items-center">
                  <Typography variant="h6">-</Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="bg-transparent"
                  >
                    <PlayArrow />
                  </Button>
                  <Typography variant="h6">-</Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <Typography variant="h6" className="w-full text-end">
                    00:00
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="bg-transparent px-12"
                  >
                    -
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TrackList
