import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    background: ${({ theme }) => theme.colors.background};
    transition: background-color .2s ease-out;
  }
  body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input, textarea {
    border: 0;
    outline: 0;
    background: none;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.6rem;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color .2s ease-out;
  }
  button {
    cursor: pointer;
  }
  button, a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`
