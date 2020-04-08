import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const GridContainer = styled.div`
  position: absolute;
  top: 200vh;
  left: 5%;
  width: 90%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 200px;
`

const ImageContainer = styled(Img)`
  display: block !important;
  width: 100%;
  height: 100%;
`

const ImageContainerSpan2 = styled(ImageContainer)`
  grid-row-end: span 2;
`

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/Collage/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 410, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const MasonryCollage = () => {
  const imageData = useStaticQuery(query)
  const imageElements = imageData.allFile.nodes.map((item, id) => {
    if (id === 1 || id === 5 || id === 7 || id === 10) {
      return (
        <ImageContainerSpan2
          id={id}
          key={item.id}
          fluid={item.childImageSharp.fluid}
        />
      )
    } else {
      return (
        <ImageContainer
          id={id}
          key={item.id}
          fluid={item.childImageSharp.fluid}
        />
      )
    }
  })

  return (
    <>
      {console.log(imageElements)}
      <GridContainer>{imageElements}</GridContainer>
    </>
  )
}

export default MasonryCollage
