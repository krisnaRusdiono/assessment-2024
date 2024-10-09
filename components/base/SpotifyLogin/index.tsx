import { signIn, signOut, useSession } from 'next-auth/react'
import Button from '@/components/base/Button'

const SpotifySSO = () => {
  const { data: session = null } = useSession()

  return session ? (
    <Button variant="outlined" color="primary" onClick={() => signOut()}>
      Logout
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => signIn('spotify')}
    >
      Login
    </Button>
  )
}

export default SpotifySSO
