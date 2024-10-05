import Typography from '@/components/base/Typography'
import Button from '@/components/base/Button'
import Link from 'next/link'

const NotFoundPage = () => (
  <div className="flex flex-col gap-8 justify-center items-center w-full h-min-screen h-screen">
    <Typography variant="h3" className="font-bold">
      you should not be here!
    </Typography>
    <Link href="/">
      <Button variant="contained">go to Homepage</Button>
    </Link>
  </div>
)

export default NotFoundPage
