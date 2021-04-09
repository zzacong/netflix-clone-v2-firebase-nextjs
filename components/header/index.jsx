import { useState } from 'react'
import NextLink from 'next/link'
import { MdInfoOutline, MdSearch } from 'react-icons/md'
import { IoMdPlay } from 'react-icons/io'
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
  InfoButton,
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

Header.Search = ({ searchTerm, setSearchTerm, ...props }) => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search active={searchActive} {...props}>
      <SearchIcon onClick={() => setSearchActive(prev => !prev)}>
        <MdSearch />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Films, series"
        active={searchActive}
      />
    </Search>
  )
}

Header.PlayButton = ({ children, ...props }) => (
  <PlayButton {...props}>
    <IoMdPlay />
    {children}
  </PlayButton>
)

Header.InfoButton = ({ children, ...props }) => (
  <InfoButton {...props}>
    <MdInfoOutline />
    {children}
  </InfoButton>
)
