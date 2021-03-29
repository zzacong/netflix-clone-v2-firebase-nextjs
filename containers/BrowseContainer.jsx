import { useEffect, useState } from 'react'
import { Header, Loading } from '../components'
import { useAuth } from '../hooks'
import ProfilesContainer from './ProfilesContainer'

export default function BrowseContainer({ slides }) {
  const { user } = useAuth()
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <p>JOKER</p>
      </Header>
    </>
  ) : (
    <ProfilesContainer user={user} profile={profile} setProfile={setProfile} />
  )
}
