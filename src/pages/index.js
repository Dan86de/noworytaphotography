import React from 'react'

import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import References from '../components/References/References'
import MasonryCollage from '../components/MasonryCollage/MasonryCollage'
import Contact from '../components/Contact/Contact'

const IndexPage = ({ data }) => {
  return (
    <>
      <SiteMetadata />
      <HeroSlider />
      <AboutSection />
      <References />
      <MasonryCollage />
      <Contact />
    </>
  )
}

export default IndexPage
