import React from 'react'
import BackgroundSlider from 'gatsby-image-background-slider'
import { graphql, useStaticQuery } from 'gatsby'

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
                childImageSharp {
                  fluid(maxWidth: 640, maxHeight: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
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
          transform: 'rotate(-2deg) scale(.9)',
        }}
      >
        {/* Captions in sync with background images*/}
        <div>Woof</div>
        <div>Meow</div>
        <>
          {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
        </>
        <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
          I could use a hand
        </a>
        <div>I need to find better hobbies</div>
      </BackgroundSlider>
    </>
  )
}

export default ImageSlider
