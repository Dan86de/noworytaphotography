import React, { Component } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navigation from '../components/Navigation/Navigation'
import MobileMenuDrawer from '../components/Navigation/MobileMenuDrawer/MobileMenuDrawer'
import Backdrop from '../components/Backdrop/Backdrop'
import Footer from '../components/Footer/Footer'

const ContentWrapper = styled.div``

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuDrawerOpen: false,
    }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { mobileMenuDrawerOpen: !prevState.mobileMenuDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ mobileMenuDrawerOpen: false })
  }

  render() {
    let backdrop

    if (this.state.mobileMenuDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <>
        <GlobalStyle />
        {backdrop}
        <MobileMenuDrawer
          linkClick={this.backdropClickHandler}
          show={this.state.mobileMenuDrawerOpen}
        />
        <Navigation
          mobileMenuDrawerClickHandler={this.drawerToggleClickHandler}
        />
        <ContentWrapper>{this.props.children}</ContentWrapper>
        <Footer />
      </>
    )
  }
}

export default MainLayout

// const MainLayout = ({ children }) => (
//   <>
//     <GlobalStyle />
//     <Backdrop />
//     <MobileMenuDrawer />
//     <Navigation />
//     <ContentWrapper>{children}</ContentWrapper>
//     <Footer />
//   </>
// )

// export default MainLayout
