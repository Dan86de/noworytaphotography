import React, { Component } from 'react'
import { render } from 'react-dom'
import cx from 'classnames'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import TouchCarousel, { clamp } from 'react-touch-carousel'
import touchWithMouseHOC from './touchWithMouseHOC'
import './Styles.css'

const data = [
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

const query = window.location.search.slice(1)
const enableLoop = true
// /\bloop\b/.test(query)
const enableAutoplay = true
// /\bautoplay\b/.test(query)

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function log(text) {
  console.log(text)
}

function CarouselContainer(props) {
  const {
    cursor,
    carouselState: { active, dragging },
    ...rest
  } = props
  let current = -Math.round(cursor) % data.length
  while (current < 0) {
    current += data.length
  }
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget
      className={cx('carousel-container', {
        'is-active': active,
        'is-dragging': dragging,
      })}
    >
      <NonPassiveTouchTarget
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />

      <div className="carousel-pagination-wrapper">
        <ol className="carousel-pagination">
          {data.map((_, index) => (
            <li key={index} className={current === index ? 'current' : ''} />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class MobileRefCarousel extends Component {
  renderCard(index, modIndex) {
    const item = data[modIndex]
    return (
      <div
        key={index}
        className="carousel-card"
        onClick={() => log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: item.background }}
        >
          <div className="carousel-title">{item.name}</div>
          <div className="carousel-text">{item.refBody}</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <React.StrictMode>
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          loop={enableLoop}
          autoplay={enableAutoplay ? 5000 : false}
          renderCard={this.renderCard}
          onRest={index => log(`rest at index ${index}`)}
          onDragStart={() => log('dragStart')}
          onDragEnd={() => log('dragEnd')}
          onDragCancel={() => log('dragCancel')}
        />
      </React.StrictMode>
    )
  }
}

export default MobileRefCarousel
