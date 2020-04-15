import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 50%;
  padding: 2rem 1rem;
  z-index:2;
  h2 {
    font-family: ff-market-web;
    font-weight: 700;
    font-size: 2.75rem;
    text-align: center;
    line-height: 1.2;
    margin: 0;
    padding:0 0.5rem;
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
      color: #7A8984;
      border: 4px solid #7A8984;
      z-index: -1;
    }
  }
  p {
    line-height: 1.4;
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
`



const ImageSlider = () => {
  const Words = ["Creativity", "Authenticity", "Personality", "Proportion", "Phantasy", "Mood", "Style", "Idea","Passion"]
  const [word,setWord] = React.useState("Passion")
  return (
    <>
      <SliderWrapper>
      <BackgroundSlider
        callbacks = {{onChange: (i) => setWord(Words[i%8])}}
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
          transform: 'position:relative, background-position: cover',
        }}
      >
        {/* Captions in sync with background images*/}
      </BackgroundSlider>
      <TextWrapper>
      <h2>Let me capture your Interior <span>{word}</span></h2>
        <p>
          I love to see what other`s do with their living places and I want to
          show this in a best possible way.
        </p>
      </TextWrapper>
      </SliderWrapper>
    </>
  )
}

export default ImageSlider
