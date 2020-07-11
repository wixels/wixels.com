import React from 'react'

// Styled Components
import { Container, Flex } from '../../styles/globalStyles'
import { Nav, NavHeader, CloseNav, NavList, NavFooter, NavBackground } from '../../styles/shared/navStyles'

// Packages
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navRoutes = [
  { id: 0, title: 'ioco connect', path: '/ioco-connect', image: 'abstract-bg.png' },
  { id: 1, title: 'ceo awards', path: '/ceo-awards', image: 'abstract-bg1.jpg' },
  { id: 2, title: 'digger', path: '/digger', image: 'abstract-bg2.jpg' }
]

export const Navigation = ({ toggleMenu, setToggleMenu }) => {
  const [revealImage, setRevealImage] = React.useState({
    show: false,
    image: 'abstract-bg.png',
    key: '0'
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav>
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav onClick={() => setToggleMenu(false)}>
                    <button>
                      <span />
                      <span />
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      onHoverStart={() => setRevealImage({
                        show: true,
                        image: route.image,
                        key: route.id
                      })}
                      onHoverEnd={() => setRevealImage({
                        show: false,
                        image: route.image,
                        key: route.id
                      })}
                      key={route.id}
                    >
                      <Link to={`/projects/${route.path}`}>
                        <motion.div
                          initial={{
                            x: -108
                          }}

                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9]
                            }
                          }}

                          class='link'
                        >
                          <span class='arrow'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 101 57'
                            >
                              <path
                                d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                                fill='#FFF'
                                fillRule='evenodd'
                              />
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}

                </ul>
              </NavList>
              <NavFooter />
              <NavBackground className='navBackground'>
                <motion.div
                  animate={{
                    width: revealImage.show ? 0 : '100%'
                  }}
                  class='reveal'
                />
                <div class='image'>
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                      key={revealImage.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut'
                      }}
                      style={{ backgroundImage: `url(/images/${revealImage.image})` }}
                    />
                  </AnimatePresence>
                </div>
              </NavBackground>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}
