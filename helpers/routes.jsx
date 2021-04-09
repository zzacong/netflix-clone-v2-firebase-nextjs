import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../hooks'

export function IsUserRedirect({ children, next }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push(next)
  }, [user])

  return children
}

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user && !loading) router.push('/signin')
  }, [user, loading])

  return user ? children : null
}
