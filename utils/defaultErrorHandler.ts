import { AxiosError, HttpStatusCode } from 'axios'
import { signOut } from 'next-auth/react'

const defaultErrorHandler = async (error: AxiosError | unknown) => {
  if (error instanceof AxiosError) {
    const { response } = error
    const { status } = response || {}
    if (status === HttpStatusCode.Unauthorized) {
      await signOut()
    }
  }
}

export default defaultErrorHandler
