import React from 'react'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
// import MasonryCollage from '../components/MasonryCollage/MasonryCollage' WIP

const IndexPage = ({ data }) => (
  <>
    <SiteMetadata />
    <HeroSlider />
    <AboutSection />
    {/* <MasonryCollage /> WIP */}
  </>
)

export default IndexPage
