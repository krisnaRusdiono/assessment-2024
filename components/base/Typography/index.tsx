import {
  Typography as MUITypography,
  TypographyOwnProps,
  TypographyProps,
} from '@mui/material'

const Typography = (props: TypographyProps & TypographyOwnProps) => (
  <MUITypography {...props} />
)

export default Typography
