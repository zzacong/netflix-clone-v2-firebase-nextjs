import { useState, useContext, createContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IoMdPlay } from 'react-icons/io'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

const PlayerContext = createContext()

export default function Player({ children, ...props }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = ({ src }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
  const videoRef = useRef()

  if (!showPlayer) return null

  // * ReactDOM.createPortal: render children into a DOM node that exists outside the DOM hierarchy of the parent component
  return createPortal(
    <Overlay
      onClick={e => {
        if (videoRef.current !== e.target) setShowPlayer(false)
      }}
      data-testid="player"
    >
      <Inner>
        <video id="netflix-player" controls ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
        <Close />
      </Inner>
    </Overlay>,
    document.body
  )
}

Player.Button = ({ ...props }) => {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer(prev => !prev)} {...props}>
      <IoMdPlay /> Play
    </Button>
  )
}
