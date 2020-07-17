import React from 'react'

// Context
import { useGlobalStateContext } from '../../context/globalContext'

// Styled Components
import { Cursor } from '../../styles/globalStyles'

export const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
  const cursor = React.useRef(null)

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`
    cursor.current.style.top = `${clientY}px`
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
        // style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        ref={cursor}
      />
    </>
  )
}
