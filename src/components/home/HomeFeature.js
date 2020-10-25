import React from 'react'

// Package imports
// import { Link } from 'react-router-dom'
import { motion, /* useAnimation */ } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// Styled imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeFeatureSection, FeaturedContent, FeaturedVideo /* FeaturedProjects */ } from '../../styles/pages/homeStyles'

export const HomeFeature = ({ onCursor }) => {
  // const animation = useAnimation()

  const [hovered, setHovered] = React.useState(false)
  // const [featuredRef, inView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: '-300px'
  // })

  // React.useEffect(() => {
  //   if (inView) {
  //     animation.start('visible')
  //   }
  // }, [animation, inView])

  return (
    <HomeFeatureSection className='homeFeatureSection' >
      <Container className='container'>
        <a href='mailto:hello@wixels.com' target='blank'>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor('pointer')}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <div>
                <p>Feel free to ask us anything at: </p>
                <h3>hello@wixels.com</h3>
              </div>
              <motion.div
                animate={{
                  // y: hovered ? 0 : -48,
                  opacity: hovered ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                class='meta'
              >
                <h4>CHAT</h4>
                <h4>SOON</h4>
              </motion.div>
            </Flex>
            <h2 class='featured-title'>
              CONTACT <br /> US
              <span class='arrow'>
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 101 57'
                >
                  <path
                    d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                    fill='#FFF'
                    fillRule='evenodd'
                  />
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo />
          {/* <video loop muted autoPlay src='/video/video1.mp4' />
          </FeaturedVideo> */}
        </a>
      </Container>
      {/* <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container> */}
    </HomeFeatureSection>
  )
}
