import React from 'react'

// Styled Imports
import {
  Banner,
  Video,
  BannerTitle,
  Headline
} from '../../styles/pages/homeStyles'

export const HomeBanner = ({ onCursor }) => {

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
        <BannerTitle variants={parent} initial='initial' animate='animate'>
          <Headline variants={child} initial='initial' animate='animate'>WIX</Headline>
          <Headline variants={child} initial='initial' animate='animate'>ELS</Headline>
        </BannerTitle>
      </Video>
    </Banner>
  )
}
