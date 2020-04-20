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

  textarea,
  input.text,
  input[type="text"],
  input[type="button"],
  input[type="submit"],
  input[type="email"],
  .input-checkbox {
  -webkit-appearance: none;
  border-radius: 0;
  }
`

export default GlobalStyle
