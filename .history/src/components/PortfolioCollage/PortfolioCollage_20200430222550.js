import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { injectIntl } from 'gatsby-plugin-intl'

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/Portfolio/" } }) {
      nodes {
        id
        childImageSharp {
          fixed(width: 870, quality: 90) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  }
`

const GalleryContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding: 0 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1920px) {
    padding: 0 5rem;
  }
`

const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(5, 250px);
  grid-auto-rows: 250px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: 250px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 250px);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ItemContainer = styled.div`
  @media (min-width: 768px) {
    :last-of-type {
      grid-column: span 2/-1;
    }
  }
  @media (min-width: 1280px) {
    :last-of-type {
      grid-column: span 2 / -1;
    }
  }
  @media (min-width: 1920px) {
    :first-of-type {
      grid-column: span 2;
      grid-row: span 2;
    }
    :nth-of-type(2) {
      grid-column: span 2;
      grid-row: span 2;
    }
    :nth-of-type(8) {
      grid-column: span 2;
      grid-row: span 2;
    }
    :last-of-type {
      grid-column: span 1;
    }
  }
`
const ImageContainer1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
`

const PortfolioCollage = props => {
  const imageData = useStaticQuery(query)
  const imageElements = imageData.allFile.nodes.map((item, id) => (
    <ItemContainer key={id}>
      <ImageContainer1
        bgImage={item.childImageSharp.fixed.src}
      ></ImageContainer1>
    </ItemContainer>
  ))
  return (
    <GalleryContainer>
      <h1>{props.intl.formatMessage({ id: 'CAROUSELSECTION.WE' })}</h1>
      <GridContainer>{imageElements}</GridContainer>
    </GalleryContainer>
  )
}

export default injectIntl(PortfolioCollage)
