import { useEffect, useState } from 'react'
import { Header, Loading } from '../components'
import { auth } from '../config/firebase'
import { useAuth } from '../hooks'
import SelectProfilesContainer from './ProfilesContainer'

export default function BrowseContainer({ slides }) {
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(t1)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo href="/" alt="Netflix" src="/logo.svg" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={signOut}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfilesContainer
      user={user}
      profile={profile}
      setProfile={setProfile}
    />
  )
}
