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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  @media (min-width: 768px) {
    top: 0;
    left: 0;
    width: 49%;
    height: 100%;
    justify-content: center;
    padding-left: 2rem;
  }
  @media (min-width: 1280px) {
    width: 43%;
    padding-left: 5rem;
  }
  @media (min-width: 1920px) {
    padding-left: 9rem;
  }
`

const HeroBigText = styled.h1`
  font-size: 2.5rem;
  font-family: ff-market-web;
  font-weight: 700;
  line-height: 1.1;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 4rem;
    width: 140%;
  }
  @media (min-width: 1280px) {
    width: 90%;
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    font-size: 4.5rem;
  }
`

const HeroSmallText = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  line-height: 1.2;
  padding: 0 2rem;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    text-align: left;
    width: 85%;
    font-size: 1.25rem;
    line-height: 1.4;
    padding: 0;
    margin-top: 1rem;
  }
  @media (min-width: 1280px) {
    margin-top: 1.5rem;
  }
  @media (min-width: 1920px) {
    width: 75%;
    font-size: 1.75rem;
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
    display: none;
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
          bgImage={imagesData.allFile.nodes[1].childImageSharp.original.src}
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
            bgImage={imagesData.allFile.nodes[0].childImageSharp.original.src}
          />
        </HeroSliderTextWrapper>
      </HeroSliderWrapper>
    </>
  )
}

export default HeroSlider
