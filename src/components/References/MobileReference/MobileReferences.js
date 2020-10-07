import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

import SingleMobileReferenceBody from './SingleMobileReferenceBody'

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 1280px) {
    display: none;
  }
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`
const Square = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.active ? '#4e625b' : 'darkgray')};
  margin: 8px;
  border-radius: 10px;
`

const referencesData = [
  {
    id: 0,
    name: 'Monika Ronewicz',
    position: 'General Manager, Felicita',
    refTitle: 'Cool person!',
    refStars: 4,
    refBody:
      'Sehr empfehlenswert! Immer wieder ein Vergnügen mit dir Immobilienfotos zu machen. Super Ideen, der geschmackvolle Blick für die Details und perfekte Gefühl für Homestaging. Du setzt unsere Immobilien immer richtig in Szene. Jede Zusammenarbeit mit Dir war perfekt, unkompliziert und professionell. Danke für die tollen Fotos. Freuen uns schon darauf, diese für unsere Website und Exposé nutzen zu dürfen.',
  },
  {
    id: 1,
    name: 'Rutkowski & Hag',
    position: 'General Manager, R&H',
    refTitle: 'Sehr empfehlenswert!',
    refStars: 5,
    refBody:
      'Sehr empfehlenswert! Immer wieder ein Vergnügen mit dir Immobilienfotos zu machen. Super Ideen, der geschmackvolle Blick für die Details und perfekte Gefühl für Homestaging. Du setzt unsere Immobilien immer richtig in Szene. Jede Zusammenarbeit mit Dir war perfekt, unkompliziert und professionell. Danke für die tollen Fotos. Freuen uns schon darauf, diese für unsere Website und Exposé nutzen zu dürfen.',
  },
  {
    id: 2,
    name: 'Max Musterman',
    position: 'Sales Manager, Musterman GmBh',
    refTitle: 'Immer wieder arbeiten',
    refStars: 5,
    refBody:
      'Sehr empfehlenswert! Immer wieder ein Vergnügen mit dir Immobilienfotos zu machen. Super Ideen, der geschmackvolle Blick für die Details und perfekte Gefühl für Homestaging. Du setzt unsere Immobilien immer richtig in Szene. Jede Zusammenarbeit mit Dir war perfekt, unkompliziert und professionell. Danke für die tollen Fotos. Freuen uns schon darauf, diese für unsere Website und Exposé nutzen zu dürfen.',
  },
]

class MobileReference extends Component {
  constructor(props) {
    super(props)
    this.state = {
      referencesData: referencesData,
    }
  }
  render() {
    const itemsToRender = referencesData.map(item => (
      <SingleMobileReferenceBody key={item.id} reference={item} />
    ))
    return (
      <StyledWrapper>
        <Carousel
          itemsToShow={1}
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <PaginationWrapper>
                {pages.map(page => {
                  const isActivePage = activePage === page
                  return (
                    <Square
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  )
                })}
              </PaginationWrapper>
            )
          }}
        >
          {itemsToRender}
        </Carousel>
      </StyledWrapper>
    )
  }
}

export default MobileReference
