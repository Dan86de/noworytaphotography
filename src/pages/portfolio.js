import React from 'react'
import styled from 'styled-components'

const PortfolioWrapper = styled.div`
  width: 100%;
  z-index: -1;
  min-height: 200vh;
  background-color: #d5d5d5;
`

const PortfolioPage = ({ data }) => (
  <>
    <PortfolioWrapper>
      <h1>This is portfolio page</h1>
    </PortfolioWrapper>
  </>
)

export default PortfolioPage
