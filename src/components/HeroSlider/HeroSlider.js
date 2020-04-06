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
  height: 40%;
  position: absolute;
  top: 60%;
  left: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.5rem 1rem;
  text-align: center;
  @media (min-width: 768px) {
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
  }
`

const HeroBigText = styled.h1`
  font-size: 2.5rem;
  font-family: ff-market-web;
  font-weight: 700;
  margin: 0 auto;
  line-height: 1.2;
  @media (min-width: 768px) {
    position: absolute;
    text-align: left;
    width: 140%;
    top: 200px;
    left: 57px;
    font-size: 3.5rem;
    z-index: 4;
  }
`

const HeroSmallText = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  line-height: 1.2;
  padding: 0 1rem;
  @media (min-width: 768px) {
    position: absolute;
    text-align: left;
    top: 400px;
    left: 44px;
    font-size: 1.5rem;
    z-index: 4;
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
