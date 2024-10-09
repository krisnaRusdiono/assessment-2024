import Typography from '@/components/base/Typography'
import TextField from '@/components/base/TextField'
import Button from '@/components/base/Button'
import { ChangeEvent, useState } from 'react'
import { Modal } from '@mui/material'
import checkEmailValidity from '@/helpers/checkEmailValidity'

const NewsLetter = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const toggleModal = () => {
    setOpen(!open)
  }

  const handleChangeEmail = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value)
  }

  const handleJoin = () => {
    toggleModal()
  }

  return (
    <div
      className="w-full p-8 min-h-142 flex flex-col bg-[#d0d0d0] justify-center items-center"
      id="section-4"
    >
      <div className="flex flex-col justify-between items-center w-105.5 h-67">
        <div className="w-full flex flex-col items-center gap-8">
          <Typography variant="h6">Join Our Newsletter</Typography>
          <TextField
            variant="outlined"
            placeholder="email"
            fullWidth
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={`w-full py-4 ${!checkEmailValidity(email) && 'opacity-50'} transition-all`}
          onClick={handleJoin}
          disabled={!checkEmailValidity(email)}
        >
          Join
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggleModal}
        closeAfterTransition
      >
        <div className="min-w-40 min-h-40 bg-white absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl flex flex-col justify-between p-8">
          <Typography variant="h6" className="font-semibold">
            Thank you for joining our newsletter!
          </Typography>
          <Typography>
            {`Our newsletter will be sent regularly to email: ${email}`}
          </Typography>
        </div>
      </Modal>
    </div>
  )
}

export default NewsLetter
