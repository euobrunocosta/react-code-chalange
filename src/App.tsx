import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from 'Pages/Home/Home'
import { theme } from 'Styles/theme'
import GlobalStyles from 'Styles/styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
)

export default App
