import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

import HandIcon from '../ImageSlide/HandIcon'

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    flex-direction: row-reverse;
  }
  @media (min-width: 1920px) {
  }
`

const ImageSlideWrapper = styled.div`
  max-height: 50%;
  overflow: hidden;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 60%;
  padding: 0 1rem;
  z-index: 2;
  @media (min-width: 321px) {
    height: 50%;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
  @media (min-width: 1920px) {
    width: 50%;
    height: 100%;
    justify-content: center;
  }
  h2 {
    font-family: ff-market-web;
    font-weight: 700;
    text-align: center;
    line-height: 1.1;
    margin: 0;
    font-size: 2rem;
    @media (min-width: 321px) {
      font-size: 2.5rem;
      padding: 0 0.5rem;
    }
    @media (min-width: 768px) {
      font-size: 3.75rem;
      width: 80%;
    }
    @media (min-width: 1280px) {
      width: 110%;
      text-align: left;
      padding: 0 0 0 6rem;
      transform: translateX(1rem);
    }
    @media (min-width: 1920px) {
      font-size: 5rem;
      text-align: left;
      padding: 0 0 0 11rem;
      width: 100%;
      transform: translateX(0);
      margin-bottom: 2rem;
    }
    span {
      position: relative;
    }
    span::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 3px;
      left: 0;
      width: 80%;
      height: 6px;
      color: #7a8984;
      border: 3px solid #7a8984;
      z-index: -1;
      @media (min-width: 321px) {
        border: 4px solid #7a8984;
        bottom: 5px;
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 1280px) {
      }
      @media (min-width: 1920px) {
        border: 4px solid #7a8984;
        bottom: 11px;
      }
    }
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.4;
    margin: 0;
    @media (min-width: 321px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.1;
      padding: 0 4rem;
    }
    @media (min-width: 1280px) {
      width: 110%;
      text-align: left;
      padding: 0 0 0 6rem;
      line-height: 1.4;
      margin-top: 2rem;
      transform: translateX(1rem);
    }
    @media (min-width: 1920px) {
      width: 100%;
      transform: translateX(0);
      margin: 0;
      font-size: 2rem;
      padding: 0 6rem 0 11rem;
    }
  }
`

const ImageSlider = ({ intl }) => {
  if (typeof window !== `undefined`) {
    const Words = [
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Creativity',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Authenticity',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Personality',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Proportion',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Phantasy',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Mood',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Style',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Idea',
      }),
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Passion',
      }),
    ]
    const [word, setWord] = React.useState(
      intl.formatMessage({
        id: 'HEROSECTION.heroSliderSpan.Passion',
      })
    )

    let isDesktop = false
    let width = window.innerWidth
    if (width >= 1280) {
      isDesktop = true
    }

    return (
      <>
        <SliderWrapper>
          <ImageSlideWrapper>
            <BackgroundSlider
              callbacks={{ onChange: i => setWord(Words[i % 8]) }}
              query={useStaticQuery(graphql`
                query {
                  backgrounds: allFile(
                    filter: { absolutePath: { regex: "/Slider/" } }
                  ) {
                    nodes {
                      id
                      relativePath
                      childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1500, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              `)}
              initDelay={4}
              transition={3}
              duration={10}
              images={[
                'slide-1.jpg',
                'slide-2.jpg',
                'slide-3.jpg',
                'slide-4.jpg',
                'slide-5.jpg',
                'slide-6.jpg',
                'slide-7.jpg',
                'slide-8.jpg',
                'slide-9.jpg',
                'slide-10.jpg',
                'slide-11.jpg',
                'slide-12.JPG',
              ]}
              style={
                isDesktop
                  ? { height: '100%', width: '50%', marginLeft: '50%' }
                  : { height: '50%' }
              }
            ></BackgroundSlider>
          </ImageSlideWrapper>
          <TextWrapper>
            <h2>
              {intl.formatMessage({ id: 'HEROSECTION.heroSliderHeading' })}{' '}
              <span>{word}</span>
            </h2>
            <p>
              {intl.formatMessage({ id: 'HEROSECTION.heroSliderSubheading' })}
            </p>
            <HandIcon></HandIcon>
          </TextWrapper>
        </SliderWrapper>
      </>
    )
  } else return null
}

export default injectIntl(ImageSlider)
