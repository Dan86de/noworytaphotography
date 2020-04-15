import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

const ContentWrapper = styled.div``

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </>
)

export default MainLayout
