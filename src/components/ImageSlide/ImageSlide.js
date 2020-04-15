import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 50vh;
  h2 {
    font-family: ff-market-web;
    font-weight: 700;
  }
`

const ImageSlider = () => {
  return (
    <>
      <BackgroundSlider
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
          transform: 'width: 100%, height:100vh, position:relative',
        }}
      >
        {/* Captions in sync with background images*/}
      </BackgroundSlider>
      <TextWrapper>
        <h2>Let me capture your Interior Passion</h2>
        <p>
          I love to see what other`s do with their living places and I want to
          show this in a best possible way.
        </p>
      </TextWrapper>
    </>
  )
}

export default ImageSlider
