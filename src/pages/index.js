import React from 'react'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import MasonryCollage from '../components/MasonryCollage/MasonryCollage'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'

const IndexPage = ({ data }) => (
  <>
    <SiteMetadata />
    <HeroSlider />
    <AboutSection />
    <MasonryCollage />
  </>
)

export default IndexPage
