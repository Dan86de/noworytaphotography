import React from 'react'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import MasonryCollage from '../components/MasonryCollage/MasonryCollage'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const IndexPage = ({ data }) => (
  <>
    <SiteMetadata />
    <HeroSlider />
    <AboutSection />
    <MasonryCollage />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
