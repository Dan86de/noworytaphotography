import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const StarIconWrapper = styled(Img)`
  width: 25px;
  margin-right: 24px;
`

const query = graphql`
  {
    file(name: { regex: "/star/" }) {
      childImageSharp {
        fluid(maxWidth: 40, maxHeight: 40, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const StarIcon = props => {
  const iconData = useStaticQuery(query)
  const StarIconImg = iconData.file.childImageSharp.fluid
  return (
    <>
      <StarIconWrapper fluid={StarIconImg} />
    </>
  )
}

export default StarIcon
