import { useNewReleaseAlbumContext } from '@/contexts/NewReleasesAlbum'
import {
  Facebook,
  Google,
  Instagram,
  Reddit,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { ListIcons } from './index.types'

const useFeeds = () => {
  const { artistName = '' } = useNewReleaseAlbumContext()
  const listIcons: ListIcons[] = [
    {
      href: 'https://instagram.com/',
      element: <Instagram key="Instagram-icon" />,
    },
    {
      href: 'https://x.com/search?q=',
      element: <Facebook key="Facebook-icon" />,
    },
    {
      href: 'https://x.com/search',
      element: <Twitter key="Twitter-icon" />,
    },
    {
      href: 'https://www.reddit.com/search/?q=',
      element: <Reddit key="Reddit-icon" />,
    },
    {
      href: 'https://youtube.com/results?search_query=',
      element: <YouTube key="YouTube-icon" />,
    },
    {
      href: 'https://google.com/search?q=',
      element: <Google key="Google-icon" />,
    },
  ]

  return {
    artistName,
    listIcons,
  }
}

export default useFeeds
