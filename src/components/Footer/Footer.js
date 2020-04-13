import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #384f47;
  color: white;
  text-align: center;
  height: 3rem;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-right: 44px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Copyright @2020 <strong>noworytaphotography.com</strong>
      </p>
    </FooterWrapper>
  )
}

export default Footer
