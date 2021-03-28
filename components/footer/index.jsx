import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer'

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Footer.Row = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>
}

Footer.Column = ({ children, ...props }) => {
  return <Column {...props}>{children}</Column>
}

Footer.Link = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

Footer.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Footer.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

Footer.Break = ({ ...restProps }) => {
  return <Break {...restProps} />
}
