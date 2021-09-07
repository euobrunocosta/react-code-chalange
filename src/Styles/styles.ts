import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: ${theme.colors.DARK};
  }
`