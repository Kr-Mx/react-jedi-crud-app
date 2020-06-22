import { createMuiTheme } from '@material-ui/core/styles'
import { yellow, blue } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: yellow[100],
      main: yellow[400],
      dark: yellow[700],
    },
    secondary: {
      light: blue[100],
      main: blue[400],
      dark: blue[700],
    },
  },
})
