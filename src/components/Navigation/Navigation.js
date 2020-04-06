import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
  position: relative;
  display: flex;
  color: #384f47;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  font-family: 'Montserrat';
  background-color: white;
  overflow: hidden;
  @media (min-width: 768px) {
    margin: 0 44px;
    background-color: transparent;
  }
  @media (min-width: 1920px) {
    margin: 0 192px;
  }
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const NavigationItem = styled.li`
  padding: 0 1.25rem 1.25rem 1.25rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    position: relative;
    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
  a.linkActive::before {
    content: '';
    position: absolute;
    top: 1.65rem;
    left: 30%;
    width: 40%;
    border: 2px solid;
    color: inherited;
    z-index: 4;
    border-radius: 3px;
  }
`

const LogoImage = styled(Image)`
  width: 50px;
  @media (min-width: 768px) {
    position: absolute;
    top: 8px;
    left: 0;
  }
  @media (min-width: 1024px) {
    width: 80px;
  }
`

const NavigationStatusBar = styled.span`
  @media (min-width: 768px) {
    position: absolute;
    top: calc(50% + 8px);
    left: 0;
    width: 100%;
    color: #384f47;
    background-color: #384f47;
    margin-left: 5rem;
    border: 1px solid #384f47;
  }
  @media (min-width: 1024px) {
    margin-left: 7rem;
  }
`

const HamburgerIcon = styled(Image)`
  width: 35px;
  @media (min-width: 768px) {
    display: none;
  }
`

const query = graphql`
  {
    allFile(filter: { extension: { regex: "/(png)/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const Navigation = () => {
  const iconsData = useStaticQuery(query)

  return (
    <NavigationWrapper>
      <Link to="/">
        <LogoImage
          fluid={iconsData.allFile.edges[1].node.childImageSharp.fluid}
        />
      </Link>
      <NavigationStatusBar />
      <HamburgerIcon
        fluid={iconsData.allFile.edges[0].node.childImageSharp.fluid}
      />
      <NavigationList>
        <NavigationItem>
          <Link to="/" activeClassName="linkActive">
            Home
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#about" activeClassName="linkActive">
            About
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/portfolio" activeClassName="linkActive">
            Portfolio
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#contact" activeClassName="linkActive">
            Contact
          </Link>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
