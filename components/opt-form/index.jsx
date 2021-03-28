import { MdChevronRight } from 'react-icons/md'
import { Container, Input, Break, Button, Text } from './styles/opt-form'

export default function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

OptForm.Input = ({ ...props }) => {
  return <Input {...props} />
}

OptForm.Button = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children} <MdChevronRight />
    </Button>
  )
}

OptForm.Text = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}

OptForm.Break = ({ ...props }) => {
  return <Break {...props} />
}
