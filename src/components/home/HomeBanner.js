import React from 'react'

// Styled Imports
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline
} from '../../styles/pages/homeStyles'

// Context Imports
import { useGlobalStateContext } from '../../context/globalContext'

// Custom Hooks
import useWindowSize from '../../hooks/useWindowSize'

export const HomeBanner = ({ onCursor }) => {
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  const canvas = React.useRef(null)
  React.useEffect(() => {
    const renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    const drawingElement = renderingElement.cloneNode()
    const drawingCtx = drawingElement.getContext('2d')
    const renderingCtx = renderingElement.getContext('2d')
    let lastX
    let lastY
    let moving = false

    renderingCtx.globalCompositeOperation = 'source-over'
    renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff'
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener('mouseover', ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener('click', ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener('mouseup', ev => {
      moving = false
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener('mousemove', ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over'
        renderingCtx.globalCompositeOperation = 'destination-out'
        const currentX = ev.pageX - renderingElement.offsetLeft
        const currentY = ev.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = 'round'
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
    // eslint-disable-next-line
  }, [currentTheme])

  // Name Animations
  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  }

  return (
    <Banner>
      <Video className='video'>
        <Canvas
          height={size.height}
          width={size.width}
          ref={canvas}
          // onMouseEnter={() => onCursor('hovered')}
          // onMouseLeave={onCursor}
        />
        <BannerTitle variants={parent} initial='initial' animate='animate'>
          <Headline variants={child} initial='initial' animate='animate'>WIX</Headline>
          <Headline variants={child} initial='initial' animate='animate'>ELS</Headline>
        </BannerTitle>
      </Video>
    </Banner>
  )
}
