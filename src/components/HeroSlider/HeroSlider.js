import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const HeroSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  @media (min-width: 768px) {
  }
`

const HeroSliderImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

const HeroSliderTextWrapper = styled.div`
  width: 100%;
  height: 45%;
  position: absolute;
  top: 55%;
  left: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.5rem 1rem;
  text-align: center;
  @media (min-width: 768px) {
    top: 0;
    left: 0;
    width: 48%;
    height: 100%;
  }
  @media (min-width: 1280px) {
    width: 43%;
  }
`

const HeroBigText = styled.h1`
  font-size: 2.5rem;
  font-family: ff-market-web;
  font-weight: 700;
  margin: 0 auto;
  line-height: 1.1;
  @media (min-width: 768px) {
    position: absolute;
    text-align: left;
    width: 140%;
    top: 200px;
    left: 57px;
    font-size: 4rem;
    z-index: 4;
  }
  @media (min-width: 1280px) {
    top: 230px;
    left: 100px;
    width: 80%;
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    top: 300px;
    left: 200px;
    font-size: 5rem;
  }
`

const HeroSmallText = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  line-height: 1.2;
  padding: 0 1rem;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    position: absolute;
    text-align: left;
    top: 400px;
    left: 44px;
    font-size: 1.5rem;
    z-index: 4;
    width: 90%;
    display: block;
    line-height: 1.4;
  }
  @media (min-width: 1280px) {
    top: 350px;
    left: 85px;
    width: 70%;
  }
  @media (min-width: 1920px) {
    top: 475px;
    left: 190px;
    font-size: 2rem;
  }
`

const HeroSmallTextSpan = styled.span`
  position: relative;
  &::after {
    position: absolute;
    bottom: 3px;
    left: 0;
    content: '';
    border: 3px solid #7a8984;
    width: 100%;
    z-index: -1;
    @media (min-width: 768px) {
      bottom: 8px;
      width: 95%;
      border: 4px solid #7a8984;
    }
    @media (min-width: 1280px) {
      bottom: 5px;
      width: 90%;
    }
    @media (min-width: 1920px) {
      bottom: 10px;
      border: 5px solid #7a8984;
      width: 90%;
    }
  }
`

const HandIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 90%;
    left: 40%;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "/SliderImages/|/SliderIcons/" } }
    ) {
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

const HeroSlider = () => {
  const imagesData = useStaticQuery(query)

  return (
    <>
      <HeroSliderWrapper>
        <HeroSliderImageWrapper
          bgImage={imagesData.allFile.nodes[0].childImageSharp.original.src}
        />
        <HeroSliderTextWrapper>
          <HeroBigText>
            Let me capture your Interior{' '}
            <HeroSmallTextSpan>Passion</HeroSmallTextSpan>
          </HeroBigText>
          <HeroSmallText>
            I love to see what other`s do with their living places and I want to
            show this in a best possible way.
          </HeroSmallText>
          <HandIcon
            bgImage={imagesData.allFile.nodes[1].childImageSharp.original.src}
          />
        </HeroSliderTextWrapper>
      </HeroSliderWrapper>
    </>
  )
}

export default HeroSlider
