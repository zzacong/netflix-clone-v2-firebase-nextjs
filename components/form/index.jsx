import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form'

export default function Form({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Form.Base = ({ children, ...props }) => <Base {...props}>{children}</Base>

Form.Error = ({ children, ...props }) => <Error {...props}>{children}</Error>

Form.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>

Form.Text = ({ children, ...props }) => <Text {...props}>{children}</Text>

Form.TextSmall = ({ children, ...props }) => (
  <TextSmall {...props}>{children}</TextSmall>
)

Form.Link = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <Link {...props}>{children}</Link>
  </NextLink>
)

Form.Input = forwardRef(({ children, ...props }, ref) => (
  <Input {...props} ref={ref}>
    {children}
  </Input>
))

Form.Submit = ({ children, ...props }) => <Submit {...props}>{children}</Submit>
