import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  font-family: 'Montserrat';
  color: #384f47;
  z-index: 22;
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    padding: 0 2.75rem;
    background-color: transparent;
  }
  @media (min-width: 1280px) {
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const NavigationListItem = styled.li`
  padding: 0 1.25rem 1.25rem 1.25rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    position: relative;
    @media (min-width: 1920px) {
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
    @media (min-width: 1280px) {
      top: 1.8rem;
    }
    @media (min-width: 1920px) {
      top: 1.7rem;
      transform: translateY(2px);
    }
  }
`

const LogoImage = styled(Image)`
  width: 50px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    width: 60px;
  }
  @media (min-width: 1920px) {
    width: 70px;
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
          fluid={iconsData.allFile.edges[2].node.childImageSharp.fluid}
        />
      </Link>
      <HamburgerIcon
        fluid={iconsData.allFile.edges[0].node.childImageSharp.fluid}
      />
      <NavigationList>
        <NavigationListItem>
          <Link to="/" activeClassName="linkActive">
            Home
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#about" activeClassName="linkActive">
            About
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#portfolio" activeClassName="linkActive">
            Portfolio
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="#contact" activeClassName="linkActive">
            Contact
          </Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
