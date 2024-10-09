import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import searchArtistNormalizers from '@/normalizers/searchArtist'
import ARTIST_LIST from '@/constants/artistList'
import { useState } from 'react'
import { useArtistContext } from '@/contexts/Artist'

const ArtistSelector = () => {
  const { selectedArtist, onChangeArtist } = useArtistContext()
  const artistList = searchArtistNormalizers(ARTIST_LIST)
  const [selectValue, setSelectValue] = useState<string>(selectedArtist)

  const handleChangeSelect = ({ target: { value } }: SelectChangeEvent) => {
    onChangeArtist(value)
    setSelectValue(value)
  }

  return (
    <Select
      variant="outlined"
      labelId="select-artist"
      id="select-artist"
      value={selectValue}
      label="Artist"
      className="min-w-60"
      placeholder="Select Artist"
      size="small"
      onChange={handleChangeSelect}
    >
      {artistList.map((item) => (
        <MenuItem value={item.value} key={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default ArtistSelector
