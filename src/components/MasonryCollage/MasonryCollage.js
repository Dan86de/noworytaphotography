import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

const GalleryContainer = styled.div`
  width: 100%;
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
  }
  @media (min-width: 1920px) {
    font-size: 4rem;
  }
`

const GridContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-rows: 80px;
  justify-items: stretch;
  align-items: stretch;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 1fr);
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
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
`
const ItemContainer = styled.div`
  overflow: hidden;
  grid-row: span ${({ h }) => h};
  @media (min-width: 768px) {
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
  display: block;
`

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/Collage/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 410, quality: 100) {
            src
          }
        }
      }
    }
  }
`

const MasonryCollage = () => {
  const imageData = useStaticQuery(query)
  function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
  }

  const imageElements = imageData.allFile.nodes.map((item, id, arr) => (
    <ItemContainer
      h={randomNumber(4) + 2}
      v={randomNumber(4)}
      key={id}
      lastOne={arr.length}
    >
      <ImageContainer
        id={randomNumber(arr.length)}
        bgImage={item.childImageSharp.fluid.src}
      ></ImageContainer>
    </ItemContainer>
  ))

  return (
    <>
      <GalleryContainer>
        <MasonryTextBig>Work examples</MasonryTextBig>
        <GridContainer>{imageElements}</GridContainer>
        <PortfolioButton>See full portfolio</PortfolioButton>
      </GalleryContainer>
    </>
  )
}

export default MasonryCollage
