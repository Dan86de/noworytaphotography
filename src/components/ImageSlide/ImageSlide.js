import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import HandIcon from '../ImageSlide/HandIcon'

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-bottom: 1rem;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 50%;
  padding: 1rem;
  z-index: 2;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
  h2 {
    font-family: ff-market-web;
    font-weight: 500;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.1;
    margin: 0;
    padding: 0 0.5rem;
    span {
      position: relative;
    }
    span::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 80%;
      height: 6px;
      color: #7a8984;
      border: 4px solid #7a8984;
      z-index: -1;
    }
  }
  p {
    line-height: 1.4;
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
    margin: 0;
  }
`

const ImageSlider = () => {
  const Words = [
    'Creativity',
    'Authenticity',
    'Personality',
    'Proportion',
    'Phantasy',
    'Mood',
    'Style',
    'Idea',
    'Passion',
  ]
  const [word, setWord] = React.useState('Passion')
  return (
    <>
      <SliderWrapper>
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
          initDelay={4} // delay before the first transition (if left at 0, the first image will be skipped initially)
          transition={3} // transition duration between images
          duration={10} // how long an image is shown
          // specify images to include (and their order) according to `relativePath`
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
          // pass down standard element props
          style={{
            height: '50%',
          }}
        >
          {/* Captions in sync with background images*/}
        </BackgroundSlider>
        <TextWrapper>
          <h2>
            Let me capture your Interior <span>{word}</span>
          </h2>
          <p>
            I love to see what other`s do with their living places and I want to
            show this in a best possible way.
          </p>
        </TextWrapper>
        <HandIcon></HandIcon>
      </SliderWrapper>
    </>
  )
}

export default ImageSlider
