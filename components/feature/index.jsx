import { Container, Title, SubTitle } from './styles/feature'

export default function Feature({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Feature.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>

Feature.SubTitle = ({ children, ...props }) => (
  <SubTitle {...props}>{children}</SubTitle>
)
