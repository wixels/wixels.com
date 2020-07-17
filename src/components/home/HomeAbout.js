import React from 'react'

// Styled Imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About, Services } from '../../styles/pages/homeStyles'

// Component Imports
import { Accordian } from '../shared/Accordian'

// Package Imports
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const accordianIds = [
  {
    id: 0,
    title: 'Front End Development',
    results: [
      'Adaptive Design',
      'Information Architecture',
      'Web Gammification',
      'Mobile First Design'
    ]
  },
  {
    id: 1,
    title: 'Back End Development',
    results: [
      'Data Structures',
      'Algorithms',
      'REST Api',
      'Database Integration'
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design',
    results: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ]
  }
]

export const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = React.useState(0)

  // Animation State
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: { opacity: 0, y: 72 }
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              This will be a long section of text
              briefly explaining what we're all about, what we believe in and
              all that good stuff.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, repudiandae facere eaque asperiores, quis ratione
              esse repellat veritatis ex, quos nihil iste. Delectus, quas natus.
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordianIds.map((details, index) => (
              <Accordian
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}
