import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(name: { regex: "/kiki_body/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ImageContainer = styled(Image)`
  width: 100%;
`

const KikiBody = () => {
  const imageData = useStaticQuery(query)
  return (
    <>
      <ImageContainer fluid={imageData.file.childImageSharp.fluid} />
    </>
  )
}

export default KikiBody
