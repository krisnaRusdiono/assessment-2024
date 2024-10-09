import { ChangeEvent, useState } from 'react'

const useNewsLetter = () => {
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

  return {
    open,
    toggleModal,
    handleJoin,
    email,
    handleChangeEmail,
  }
}

export default useNewsLetter
