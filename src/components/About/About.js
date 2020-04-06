import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const AboutSectionWrapper = styled.section`
  position: absolute;
  top: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
`

const AboutTextBig = styled.h2`
  font-size: 2.5rem;
  font-family: ff-market-web;
  font-weight: 700;
  margin: 0 auto;
  line-height: 1.2;
  display: block;
  width: 80%;
  text-align: center;
`

const AboutTextMid = styled.h3`
  font-size: 2rem;
  font-family: ff-market-web;
  font-weight: 700;
  margin: 0 auto;
  line-height: 1.2;
`

const AboutTextSmall = styled.p`
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem 1rem;
  line-height: 1.5;
`

const AboutImageWrapper = styled.div`
  width: 260px;
  height: 350px;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 5;
  margin: 1rem auto;
`

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/AboutImages/" } }) {
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

const AboutSection = () => {
  const imageData = useStaticQuery(query)
  return (
    <>
      <AboutSectionWrapper id="about">
        <AboutTextBig>Hi my name is Kasia</AboutTextBig>
        <AboutImageWrapper
          bgImage={imageData.allFile.nodes[0].childImageSharp.original.src}
        />
        <AboutTextSmall>
          I would like to tell you about my passion. I'm interior photographer.
          I'm doing this because every interior its unique in its own way and
          worth photographing. I would like to show you how to tell your
          interior story by using my camera. In my work I'm trying to pay
          attention to every detail, because
        </AboutTextSmall>

        <AboutTextMid>"the devil is in the detail"</AboutTextMid>
      </AboutSectionWrapper>
    </>
  )
}

export default AboutSection
