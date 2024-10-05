import Typography from '@/components/base/Typography'
import TextField from '@/components/base/TextField'
import Button from '@/components/base/Button'

const NewsLetter = () => (
  <div className="w-full p-8 min-h-142 flex flex-col bg-[#d0d0d0] justify-center items-center">
    <div className="flex flex-col justify-between items-center w-105.5 h-67">
      <div className="w-full flex flex-col items-center gap-8">
        <Typography variant="h6">Join Our Newsletter</Typography>
        <TextField variant="outlined" placeholder="email" fullWidth />
      </div>
      <Button variant="contained" color="primary" className="w-full py-4">
        Join
      </Button>
    </div>
  </div>
)

export default NewsLetter
