import { useState, useContext, createContext } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Accordion.Frame = ({ children, ...props }) => {
  return <Frame {...props}>{children}</Frame>
}

Accordion.Item = ({ children, ...props }) => {
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = ({ children, ...props }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Header onClick={() => setToggleShow(prev => !prev)} {...props}>
      {children}
      {toggleShow ? <MdClose /> : <MdAdd />}
    </Header>
  )
}

Accordion.Body = ({ children, ...props }) => {
  const { toggleShow } = useContext(ToggleContext)

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...props}>
      <span>{children}</span>
    </Body>
  )
}
