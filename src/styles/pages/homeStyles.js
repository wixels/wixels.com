import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;

  @media (max-width: 689px) {
    height: fit-content;
    margin-bottom: 13rem;
  }
`

export const Video = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(/images/banner.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  h2 {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1119px) {
    height: 60vh;
  }

  @media (max-width: 689px) {
    height: 40vh;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;
  @media (max-width: 1119px) {
    bottom: inherit;
    top: 50vh;
  }
  @media (max-width: 689px) {
    bottom: inherit;
    top: 30vh;
  }
`
export const Headline = styled(motion.span)`
  display: block;
  font-size: 18rem;
  font-weight: 900;
  line-height: 0.76;
  @media (max-width: 992px) {
    font-size: 8rem;
  }  
`

// Content
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
  @media (max-width: 689px) {
    margin-bottom: 20px
  }
`

export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
`

// Featured
export const HomeFeatureSection = styled(motion.div)`
  position: relative

  a {
    margin-bottom: 200px
    position: relative;
    display: block;
  }
`
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  margin-bottom: 3rem;
  color: ${props => props.theme.text}; 

  h3 {
    font-size: 1.4rem;
  }

  .meta {
    display: flex;

    h4 {
      &:last-child {
        margin-left: 1rem;
      }

      @media (max-width: 992px) {
        margin: 0;
      }
    }
  }

  .featured-title {
    @media (max-width: 992px) {
      display: none;
    }
    transform: rotate(-90deg);
    position: absolute;
    bottom: 128px;
    mix-blend-mode: screen;
    left: -265px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;

        path {
          fill: ${props => props.theme.text}
        }
      }
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  background-image: url(/images/grad.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  
  button {
    background: ${props => props.theme.red};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;

    span {
      margin-right: 100px;
      display: block;
    }

    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%)
    }

    &:before {
      margin-top: -8px;
    }

    &:after {
      margin-top: 8px;
    }
  }
`
// About
export const HomeAboutSection = styled(motion.div)`
  padding-bottom: 200px;
  /* background: green; */
`

export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
`

export const Services = styled.div`
  h3 {
    color: ${props => props.theme.text}
  }
`
