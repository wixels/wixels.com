import React from 'react'

// Context Imports
import { useGlobalStateContext, useGlobalDispatchContext } from './context/globalContext'

// Package Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Styled Components
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Header } from './components/shared/Header'
import { CustomCursor } from './components/CustomCursor'
import { HomeBanner } from './components/home/HomeBanner'
import { Navigation } from './components/navigation/Navigation'
import { HomeContent } from './components/home/HomeContent'
import { HomeFeature } from './components/home/HomeFeature'

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`
// eslint-disable-next-line
const darkTheme = {
  background: '#000',
  text: '#fff',
  red: '#ea291e'
}

const lightTheme = {
  background: '#fff',
  text: '#000',
  red: '#ea291e'
}

export const App = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Router>
        <CustomCursor toggleMenu={toggleMenu} />
        <Header
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          onCursor={onCursor}
        />
        <Navigation
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          onCursor={onCursor}
        />
        <Switch>
          <Route to='/'>
            <HomeBanner onCursor={onCursor} />
            <HomeContent />
            <HomeFeature onCursor={onCursor} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  )
}
