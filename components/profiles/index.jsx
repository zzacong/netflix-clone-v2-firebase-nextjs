import { Container, Title, List, Item, Picture, Name } from './styles/profiles'

export default function Profiles({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Profiles.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
)

Profiles.List = ({ children, ...props }) => <List {...props}>{children}</List>

Profiles.User = ({ children, ...props }) => <Item {...props}>{children}</Item>

Profiles.Picture = ({ src, children, ...props }) => (
  <Picture
    src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    {...props}
  />
)

Profiles.Name = ({ children, ...props }) => <Name {...props}>{children}</Name>
