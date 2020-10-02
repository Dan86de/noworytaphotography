import React from 'react'

import CarouselListItem from './CarouselListItem'

const CarouselList = ({
  activeReferenceId,
  references,
  setActiveReferenceId,
  handlePause,
}) => {
  const listItems = references.map(reference => {
    return (
      <CarouselListItem
        handlePause={handlePause}
        isActive={reference.id === activeReferenceId}
        key={reference.id}
        reference={reference}
        setActiveReferenceId={setActiveReferenceId}
      />
    )
  })
  return <ul>{listItems}</ul>
}

export default CarouselList
