import React from 'react'

// Package Import
import { Link } from 'react-router-dom'

// Styled Components
import { HeaderNav, Logo, Menu } from '../../styles/shared/headerStyles'
import { Container, Flex } from '../../styles/globalStyles'

// Context Imports
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'

export const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
    }
  }

  React.useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9]
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link to='/'>WIX</Link>
            <span
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
              onClick={() => toggleTheme()}
            />
            <Link to='/'>LS</Link>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span />
              <span />
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}
