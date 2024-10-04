import {
  Button as MUIButton,
  ButtonBaseOwnProps,
  ButtonProps,
} from '@mui/material'

const Button = (props: ButtonProps & ButtonBaseOwnProps) => (
  <MUIButton {...props} />
)

export default Button
