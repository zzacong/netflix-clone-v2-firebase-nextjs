import { Header } from '../components'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo href="/" alt="Netflix" src="/logo.svg" />
        <Header.ButtonLink href="/signin">Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
