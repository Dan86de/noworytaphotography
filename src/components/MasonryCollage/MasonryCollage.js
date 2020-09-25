import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import { injectIntl, Link } from 'gatsby-plugin-intl'

const GalleryContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
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

const MasonryTextBig = styled.h1`
  font-family: ff-market-web;
  font-size: 2.5rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1280px) {
    font-size: 3.5rem;
    text-align: left;
    padding: 0 3rem;
  }
  @media (min-width: 1920px) {
    font-size: 4rem;
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

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
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

const PortfolioButton = styled.button`
  background-color: #384f47;
  color: white;
  border: none;
  margin: 2rem auto;
  padding: 0.25rem 4rem;
  font-size: 1.5rem;
  font-family: ff-market-web;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #384f47;
  }
  @media (min-width: 768px) {
    margin: 3rem auto;
    font-size: 2rem;
  }
  @media (min-width: 1280px) {
    margin: 3rem auto;
    font-size: 2rem;
    padding: 0.5rem 6rem;
  }
  @media (min-width: 1920px) {
    font-size: 2rem;
    padding: 0.5rem 4rem;
  }
`

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/CollageImages/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 640, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const MasonryCollage = ({ intl }) => {
  const imageData = useStaticQuery(query)

  const imageElements = imageData.allFile.nodes.map((item, id) => (
    <ItemContainer key={id}>
      <ImageContainer bgImage={item.childImageSharp.fluid.src}></ImageContainer>
    </ItemContainer>
  ))

  return (
    <>
      <GalleryContainer id="portfolio">
        <MasonryTextBig>
          {intl.formatMessage({ id: 'CAROUSELSECTION.WE' })}
        </MasonryTextBig>
        <GridContainer>{imageElements}</GridContainer>
        <Link
          to="/portfolio"
          style={{ textDecoration: 'none', width: '100%', display: 'flex' }}
        >
          <PortfolioButton>
            {intl.formatMessage({ id: 'CAROUSELSECTION.SP' })}
          </PortfolioButton>
        </Link>
      </GalleryContainer>
    </>
  )
}

export default injectIntl(MasonryCollage)
