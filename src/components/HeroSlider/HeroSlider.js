import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const HeroSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
`

const HeroSliderImageWrapper = styled.div`
  min-height: 310px;
  background-image: url(${({ image }) => image});
`

const HeroSliderTextWrapper = styled.div``

const HeroBigText = styled.h1`
  font-family: ff-market-web, sans-serif;
  font-weight: 700;
  font-style: normal;
`

const query = graphql`
  {
    allFile(filter: { extension: { regex: "/(jpg)/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
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
      {console.log(imagesData)}
      <HeroSliderWrapper>
        <HeroSliderImageWrapper />
        <HeroSliderTextWrapper>
          <HeroBigText>
            Let me capture your Interior <span>Passion</span>
          </HeroBigText>
          <p>
            I love to see what other`s do with their living places and I want to
            show this in a best possible way.
          </p>
        </HeroSliderTextWrapper>
      </HeroSliderWrapper>
    </>
  )
}

export default HeroSlider
// class HeroSlider extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       query: graphql`
//         {
//           allFile(filter: { extension: { regex: "/(jpeg)/" } }) {
//             edges {
//               node {
//                 id
//                 name
//                 childImageSharp {
//                   fluid(maxWidth: 1920) {
//                     ...GatsbyImageSharpFluid_noBase64
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `,
//     }
//   }

//   render() {
//     let ImagesData = useStaticQuery(this.state.query)
//     return (
//       <>
//         {console.log(ImagesData)}
//         <HeroSliderWrapper>
//           <HeroSliderImageWrapper />
//           <HeroSliderTextWrapper>
//             <HeroBigText>
//               Let me capture your Interior <span>Passion</span>
//             </HeroBigText>
//             <p>
//               I love to see what other`s do with their living places and I want
//               to show this in a best possible way.
//             </p>
//           </HeroSliderTextWrapper>
//         </HeroSliderWrapper>
//       </>
//     )
//   }
// }

// export default HeroSlider
