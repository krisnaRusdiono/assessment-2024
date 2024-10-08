import { SearchArtistData } from '@/types/searchArtist'
import { SelectItems } from '@/types/selectItem'

const searchArtistNormalizers = (data: SearchArtistData): SelectItems[] => {
  const {
    artists: { items },
  } = data
  return items.map((item) => ({
    label: item.name,
    value: item.id,
  }))
}

export default searchArtistNormalizers
