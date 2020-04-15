import React from 'react'

import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import MasonryCollage from '../components/MasonryCollage/MasonryCollage'
import Contact from '../components/Contact/Contact'

const IndexPage = ({ data }) => {
  return (
    <>
      <SiteMetadata />
      <HeroSlider />
      <AboutSection />
      <MasonryCollage />
      <Contact />
    </>
  )
}

export default IndexPage
