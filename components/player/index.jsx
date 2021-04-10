import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { IoMdPlay } from 'react-icons/io'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

export const PlayerContext = createContext()

export default function Player({ children, ...props }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
  if (!showPlayer) return null
  return ReactDOM.createPortal(
    <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close />
      </Inner>
    </Overlay>,
    document.body
  )
}

Player.Button = function PlayerButton({ ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...props}>
      <IoMdPlay />
      Play
    </Button>
  )
}
