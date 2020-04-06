import React from 'react'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'

const IndexPage = ({ data }) => (
  <>
    <SiteMetadata />
    <HeroSlider />
    <AboutSection />
  </>
)

export default IndexPage
