import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/xws6uis.css");
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
    position: relative;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
