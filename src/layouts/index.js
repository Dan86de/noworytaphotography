import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styles/globalStyles'
import Navigation from '../components/Navigation/Navigation'
// import Footer from '../components/Footer/Footer'

const ContentWrapper = styled.div`
  margin: 0 16px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin: 0 44px;
  }
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <ContentWrapper>{children}</ContentWrapper>
    {/* <Footer /> */}
  </>
)

export default MainLayout
