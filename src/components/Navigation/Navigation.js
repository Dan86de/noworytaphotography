import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
  display: flex;
  color: #384f47;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  background-color: white;
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;
`

const NavigationItem = styled.li`
  padding: 1.25rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <h1>Logo</h1>
      <NavigationList>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#about">About</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/portfolio">Portfolio</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="#contact">Contact</Link>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
