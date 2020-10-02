import React, { useState } from 'react'
import styled from 'styled-components'
import useInterval from './useIntervalHook'

import CarouselList from './CarouselList'
import ReferenceBody from './ReferenceBody.js'

const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`
const StyledCarouselListWrapper = styled.div`
  width: 50%;
`

const StyledCarouselBodyWrapper = styled.div`
  width: 50%;
`

const DesktopReferencesCarousel = () => {
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
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae excepturi accusantium adipisci provident temporibus, molestiae optio dignissimos ex inventore deleniti iusto molestias cupiditate qui illo incidunt hic eaque repudiandae quod nihil vel. Repellendus nisi architecto exercitationem quisquam eaque earum magni, repudiandae eum nam culpa ipsum deserunt. Debitis voluptatibus corporis quos est deserunt doloribus, doloremque dolores a expedita at obcaecati necessitatibus perferendis reprehenderit quibusdam optio excepturi aliquid. Modi incidunt dicta accusamus qui, magnam expedita recusandae porro corrupti molestiae, itaque voluptas adipisci mollitia aut sequi cupiditate tempore distinctio unde veniam. Laboriosam voluptatibus aut et accusamus ab ipsa repudiandae eveniet doloribus maiores?',
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

  const [activeReferenceId, setActiveReferenceId] = useState(0)
  let delay = 5000
  const [isRunning, setIsRunning] = useState(true)

  useInterval(
    () => {
      setActiveReferenceId(prevState => {
        if (prevState <= 1) {
          return prevState + 1
        } else {
          return 0
        }
      })
    },
    isRunning ? delay : null
  )

  function handleIntervalPause(value) {
    setIsRunning(prevState => value)
  }

  return (
    <>
      <StyledCarouselWrapper>
        <StyledCarouselListWrapper>
          <CarouselList
            handlePause={handleIntervalPause}
            activeReferenceId={activeReferenceId}
            references={referencesData}
            setActiveReferenceId={setActiveReferenceId}
          />
        </StyledCarouselListWrapper>
        <StyledCarouselBodyWrapper>
          <ReferenceBody activeReference={referencesData[activeReferenceId]} />
        </StyledCarouselBodyWrapper>
      </StyledCarouselWrapper>
    </>
  )
}

export default DesktopReferencesCarousel
