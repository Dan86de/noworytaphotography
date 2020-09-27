import React from 'react'

import CarouselListItem from './CarouselListItem'

const CarouselList = ({
  activeReferenceId,
  references,
  setActiveReferenceId,
}) => {
  return (
    <ul>
      {references.map(reference => {
        return (
          <CarouselListItem
            key={reference.id}
            reference={reference}
            setActiveReferenceId={setActiveReferenceId}
          />
        )
      })}
    </ul>
  )
}

export default CarouselList
