import React from 'react'

// Styled Importd
import { AccordianHeader, AccordianIcon, AccordianContent } from '../../styles/layout/Accordian'

// Context Imports
import { useGlobalStateContext } from '../../context/globalContext'

// Package Import
import { motion } from 'framer-motion'

export const Accordian = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = React.useState(false)
  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordianHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor('')}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === 'dark' ? '#ffffff' : '#000000'
        }}
      >
        <AccordianIcon>
          <motion.span
            animate={{
              rotate: isOpen || hovered ? 0 : 45,
              x: 3
            }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
          />
          <motion.span
            animate={{
              rotate: isOpen || hovered ? 0 : -45,
              x: -3
            }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
          />
        </AccordianIcon>
        {details.title}
      </AccordianHeader>
      <AccordianContent
        key='content'
        animate={{ height: isOpen ? '100%' : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9]
        }}
      >
        {details.results.map((detail, index) => (
          <span key={index}>{detail}</span>
        ))}
      </AccordianContent>
    </>
  )
}
