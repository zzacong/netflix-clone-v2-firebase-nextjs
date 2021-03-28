import NextLink from 'next/link'
import { forwardRef } from 'react'
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
