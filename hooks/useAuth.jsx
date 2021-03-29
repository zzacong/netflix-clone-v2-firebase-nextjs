import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'

export default function useAuth() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const { auth } = useContext(FirebaseContext)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser')
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const signIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const signOut = () => auth.signOut()

  return { user, loading, signUp, signIn, signOut }
}
