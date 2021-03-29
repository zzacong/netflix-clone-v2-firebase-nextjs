import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth, useContent } from '../hooks'

export default function Browse() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()
  const { series } = useContent('series')
  const { films } = useContent('films')

  useEffect(() => {
    if (!user && !loading) router.push('/signin')
  }, [user, loading])

  if (user)
    return (
      <>
        <h1>BROWSE</h1>
        <button type="submit" onClick={() => signOut()}>
          log out
        </button>
      </>
    )
  return null
}
