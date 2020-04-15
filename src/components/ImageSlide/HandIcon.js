import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const HandIconWrapper = styled(Img)`
  width: 40px;
`

const query = graphql`
  {
    file(name: { regex: "/hand/" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const HandIcon = props => {
  const iconData = useStaticQuery(query)
  const HandIcon = iconData.file.childImageSharp.fluid
  return (
    <>
      <HandIconWrapper fluid={HandIcon} />
    </>
  )
}

export default HandIcon
