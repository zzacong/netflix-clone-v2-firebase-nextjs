import NextLink from 'next/link'
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/header'

export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children
}

Header.Frame = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

Header.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>

Header.Logo = ({ href, ...props }) => (
  <NextLink href={href} passHref>
    <a>
      <Logo {...props} />
    </a>
  </NextLink>
)

Header.ButtonLink = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <ButtonLink {...props}>{children}</ButtonLink>
  </NextLink>
)

Header.Feature = ({ children, ...props }) => (
  <Feature {...props}>{children}</Feature>
)

Header.FeatureCallOut = ({ children, ...props }) => (
  <FeatureCallOut {...props}>{children}</FeatureCallOut>
)

Header.Text = ({ children, ...props }) => <Text {...props}>{children}</Text>

Header.TextLink = ({ children, ...props }) => <Link {...props}>{children}</Link>

Header.Profile = ({ children, ...props }) => (
  <Profile {...props}>{children}</Profile>
)

Header.Picture = ({ src, ...props }) => (
  <Picture src={`/images/users/${src}.png`} {...props} />
)

Header.Dropdown = ({ children, ...props }) => (
  <Dropdown {...props}>{children}</Dropdown>
)
