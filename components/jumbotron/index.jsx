import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...props }) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
Jumbotron.Pane = ({ children, ...props }) => {
  return <Pane {...props}>{children}</Pane>
}
Jumbotron.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}
Jumbotron.SubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}
Jumbotron.Image = ({ children, ...props }) => {
  return <Image {...props} />
}
