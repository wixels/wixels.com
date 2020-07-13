import React from 'react'

// Context
import { useGlobalStateContext } from '../context/globalContext'

// Styled Components
import { Cursor } from '../styles/globalStyles'

export const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()

  const [mousePosition, setMousePosition] = React.useState({
    x: 400,
    y: 400
  })

  const onMouseMove = e => {
    const { pageX: x, pageY: y } = e
    setMousePosition({ x, y })
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className={`
        ${cursorType ? 'hovered' : ''} 
        ${cursorType}
        ${toggleMenu ? 'nav-open' : ''}
        `}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}
