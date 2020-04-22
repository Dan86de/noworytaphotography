import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { injectIntl } from 'gatsby-plugin-intl'

const AboutSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0 2.75rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const AboutTextBig = styled.h2`
  margin: 1rem 2rem;
  font-size: 2.2rem;
  font-family: ff-market-web;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  display: block;
  width: 70%;
  @media (min-width: 768px) {
    font-size: 3.5rem;
    width: 40%;
    margin: 0;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const AboutTextMid = styled.h3`
  font-family: ff-market-web;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 321px) {
    font-size: 2rem;
    margin: 0rem auto 1rem auto;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    margin: 1rem auto 3rem auto;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const AboutTextSmall = styled.p`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.3;
  padding: 1rem 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 2rem 2rem;
    line-height: 1.4;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`

const AboutImageWrapper = styled(Img)`
  display: block !important;
  width: 264px;
  height: 352px;
  z-index: 5;
  padding: 1rem auto;
  @media (min-width: 768px) {
    margin-left: 2.5rem;
  }
  @media (min-width: 1280px) {
    margin: 2rem auto;
    width: 375px;
    height: 550px;
  }
  @media (min-width: 1920px) {
    width: 475px;
    height: 650px;
    margin: 3rem 0 5rem 0;
  }
`

const AboutTextBigAbout = styled.h2`
  display: none;
  margin: 3rem 0 2rem 0;
  position: relative;
  &::after {
    display: block;
    content: 'About';
    position: absolute;
    top: 200%;
    left: -35%;
    font-size: 28rem;
    opacity: 0.1;
    font-family: ff-market-web;
    z-index: -3;
    letter-spacing: 3rem;
    transform: rotate(-40deg);
    @media (min-width: 1280px) {
      transform: rotate(15deg);
      top: -5%;
      left: -20%;
      font-size: 35rem;
      letter-spacing: 4.25rem;
    }
    @media (min-width: 1920px) {
      top: -70%;
      left: -20%;
      font-size: 50rem;
      letter-spacing: 7rem;
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
    margin-top: 3rem;
    margin-bottom: 0rem;
    font-size: 4rem;
  }
  @media (min-width: 1920px) {
    margin-top: 5rem;
    margin-bottom: 0rem;
    font-size: 5rem;
  }
`

const AboutTextBiScreensWrapper = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    h1 {
      font-family: ff-market-web;
      font-size: 3.5rem;
    }
    h2 {
      font-family: ff-market-web;
      font-size: 3rem;
      text-align: center;
      padding-top: 1rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      text-align: justify;
    }
  }
  @media (min-width: 1920px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 4rem;
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

const AboutSection = ({ intl }) => {
  const imageData = useStaticQuery(query)
  const AboutCollageImage = imageData.file.childImageSharp.fluid
  return (
    <>
      <AboutSectionWrapper id="about">
        <AboutTextBigAbout>
          {intl.formatMessage({ id: 'ABOUTSECTION.About' })}
        </AboutTextBigAbout>
        <AboutTextBig>
          {intl.formatMessage({ id: 'ABOUTSECTION.myName' })}
        </AboutTextBig>
        <AboutImageWrapper fluid={AboutCollageImage} />

        <AboutTextSmall>
          {intl.formatMessage({ id: 'ABOUTSECTION.longdesc' })}
        </AboutTextSmall>

        <AboutTextMid>
          "{intl.formatMessage({ id: 'ABOUTSECTION.devil' })}"
        </AboutTextMid>
        <AboutTextBiScreensWrapper>
          <h1>{intl.formatMessage({ id: 'ABOUTSECTION.myName' })}</h1>
          <p>{intl.formatMessage({ id: 'ABOUTSECTION.longdesc' })}</p>
          <h2>"{intl.formatMessage({ id: 'ABOUTSECTION.devil' })}"</h2>
        </AboutTextBiScreensWrapper>
      </AboutSectionWrapper>
    </>
  )
}

export default injectIntl(AboutSection)
