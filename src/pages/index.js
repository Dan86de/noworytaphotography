import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import HeroSlider from '../components/HeroSlider/HeroSlider'
import AboutSection from '../components/About/About'
import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import MasonryCollage from '../components/MasonryCollage/MasonryCollage'
import Contact from '../components/Contact/Contact'

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/SliderImages/" } }) {
      nodes {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const imageData = useStaticQuery(query)
  return (
    <>
      <SiteMetadata />
      <HeroSlider images={imageData} />
      <AboutSection />
      <MasonryCollage />
      <Contact />
    </>
  )
}

export default IndexPage
