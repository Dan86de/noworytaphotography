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
  padding: 0 1rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 3rem;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0 6rem;
  }
`

const AboutTextBig = styled.h2`
  margin: 1rem auto;
  font-size: 2.5rem;
  font-family: ff-market-web;
  font-weight: 700;
  line-height: 1.2;
  display: block;
  width: 80%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 3.5rem;
    width: 50%;
    margin-right: 1rem;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const AboutTextBigAbout = styled.h2`
  display: none;
  margin: 3rem 0 2rem 0;
  @media (min-width: 768px) {
    display: block;
    font-size: 3.5rem;
    font-family: ff-market-web;
    font-weight: 700;
    line-height: 1.2;
    width: 100%;
    align-self: flex-start;
  }
  @media (min-width: 1280px) {
    font-size: 4rem;
    margin-bottom: 0;
  }
`

const AboutTextMid = styled.h3`
  font-size: 2rem;
  font-family: ff-market-web;
  font-weight: 700;
  margin: 0 auto;
  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`
const AboutImageWrapper = styled.div`
  width: 260px;
  height: 350px;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 5;
  @media (min-width: 768px) {
    margin-left: 3rem;
    position: relative;
    &::after {
      content: 'About';
      position: absolute;
      top: 0;
      left: -90%;
      font-size: 28rem;
      opacity: 0.1;
      font-family: ff-market-web;
      z-index: -3;
      letter-spacing: 2rem;
      transform: rotate(-40deg);
      @media (min-width: 1280px) {
        transform: rotate(15deg);
        top: -70%;
        left: -110%;
        font-size: 40rem;
      }
      @media (min-width: 1920px) {
        display: none;
      }
    }
  }
  @media (min-width: 1280px) {
    margin-left: 7rem;
    width: 310px;
    height: 400px;
  }
`

const AboutTextSmall = styled.p`
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem 1rem;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding: 2rem 2rem;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const AboutTextBiScreensWrapper = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-right: 3rem;
    h1 {
      font-family: ff-market-web;
      font-size: 4rem;
      margin-top: 0;
    }
    h2 {
      font-family: ff-market-web;
      font-size: 3rem;
      text-align: center;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.6;
    }
  }
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
        <AboutTextBigAbout>About</AboutTextBigAbout>
        <AboutTextBig>Hi my name is Kasia</AboutTextBig>
        <AboutImageWrapper
          bgImage={imageData.allFile.nodes[0].childImageSharp.original.src}
        />
        <AboutTextBiScreensWrapper>
          <h1>Hi My name is Kasia</h1>
          <p>
            {' '}
            I would like to tell you about my passion. I'm interior
            photographer. I'm doing this because every interior its unique in
            its own way and worth photographing. I would like to show you how to
            tell your interior story by using my camera. In my work I'm trying
            to pay attention to every detail, because
          </p>
          <h2>"the devil is in the detail"</h2>
        </AboutTextBiScreensWrapper>
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
