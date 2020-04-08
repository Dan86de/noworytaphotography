import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const AboutSectionWrapper = styled.section`
  position: absolute;
  top: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
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
  &::after {
    display: block !important;
    content: 'About';
    position: absolute;
    top: 20%;
    left: -20%;
    font-size: 28rem;
    opacity: 0.1;
    font-family: ff-market-web;
    z-index: -3;
    letter-spacing: 2rem;
    transform: rotate(-40deg);
    @media (min-width: 1280px) {
      transform: rotate(15deg);
      top: -10%;
      left: -15%;
      font-size: 40rem;
      letter-spacing: 4.25rem;
    }
    @media (min-width: 1920px) {
      top: -10%;
      left: -15%;
      font-size: 60rem;
      letter-spacing: 5rem;
    }
  }
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
    margin-top: 5rem;
    margin-bottom: 0rem;
    font-size: 4rem;
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
const AboutImageWrapper = styled(Img)`
  display: block !important;
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
  }
  @media (min-width: 1280px) {
    margin-left: 4rem;
  }
  @media (min-width: 1920px) {
    margin-top: 3rem;
    margin-left: 10rem;
    margin-bottom: 7rem;
    width: 475px;
    height: 650px;
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
      margin: 2rem;
    }
    h2 {
      font-family: ff-market-web;
      font-size: 3rem;
      text-align: center;
      margin: 2rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      width: 110%;
      text-align: justify;
    }
  }
  @media (min-width: 1920px) {
    width: 40%;
    margin-right: 12rem;
    h1 {
      font-size: 5rem;
      margin: 0rem auto 4rem auto;
    }
    h2 {
      font-size: 4rem;
      margin: 4rem auto;
    }
    p {
      font-size: 1.5rem;
    }
  }
`
const query = graphql`
  {
    file(name: { regex: "/kate_bw/" }) {
      childImageSharp {
        fluid(maxWidth: 475, maxHeight: 650, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
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
        <AboutImageWrapper fluid={imageData.file.childImageSharp.fluid} />
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
