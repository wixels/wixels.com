import React from 'react'

// Styled Components
import { Container } from '../../styles/globalStyles'
import { HomeContentSection, Content } from '../../styles/pages/homeStyles'

// Package Import
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])
  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
          Lorem ipsum dolor sit <br />amet consectetur-- adipisicing elit. Vitae deleniti
          quod blanditiis reiciendis, quisquam similique quia animi voluptatem debitis
          accusantium voluptates tempore iste quaerat perferendis, quis, optio veniam.
        </Content>
      </Container>
    </HomeContentSection>
  )
}
