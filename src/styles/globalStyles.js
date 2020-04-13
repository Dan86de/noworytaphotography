import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html
  {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    color: #384f47;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
