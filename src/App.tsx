import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Router from './routes'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
