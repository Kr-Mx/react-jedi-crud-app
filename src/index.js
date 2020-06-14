import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { App } from './App'
import { theme } from './styles/theme'
import { pageData } from './constants'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App pageData={pageData} />
  </ThemeProvider>,
  document.getElementById('root'),
)
