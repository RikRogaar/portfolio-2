import anime from 'animejs'
import React, { useState, useEffect } from 'react'
import { Tilegrid, Tile, TileText } from './TileGrid.styles'

export const TileGrid = () => {
  const [toggled, setToggled] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [textOpacity, setTextOpacity] = useState(0)

  let columns = Math.floor(window.innerWidth / 50)
  let rows = Math.floor(window.innerHeight / 50)
  const texts = ['Rik Rogaar', 'Software Dev']

  useEffect(() => {
    if (isAnimating) {
      setTextOpacity(0)
    } else {
      setTextOpacity(1)
    }
  }, [isAnimating])

  const createTile = (index) => {
    return (
      <Tile
        className="tile"
        key={index}
        onClick={() => animateTiles(index)}
        disabled={isAnimating}
      ></Tile>
    )
  }

  const createTiles = (quantity) => {
    return Array.from(Array(quantity).keys()).map((index) => createTile(index))
  }

  const animateTiles = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setToggled(!toggled)

    const direction = toggled ? 1 : -1
    anime({
      targets: '.tile',
      opacity: [textOpacity, 0],
      delay: anime.stagger(25, { grid: [columns, rows], from: index }),
      complete: () => {
        setCurrentIndex((currentIndex + direction + texts.length) % texts.length)
        anime({
          targets: '.tile',
          opacity: [0, textOpacity],
          delay: anime.stagger(25, { grid: [columns, rows], from: index }),
          complete: () => setIsAnimating(false),
        })
      },
    })
  }
  return (
    <>
      <Tilegrid
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(50px, 1fr))`,
          gridTemplateRows: `repeat(auto-fill, minmax(50px, 1fr))`,
        }}
      >
        {createTiles(columns * rows)}
      </Tilegrid>
      <TileText
        className="tile-text"
        style={{ opacity: textOpacity, transition: 'opacity 0.2s ease-in-out' }}
      >
        {texts[currentIndex]}
      </TileText>
    </>
  )
}
