import { createContext } from 'react'
import { auth, db } from '../config/firebase'

const FirebaseContext = createContext(null)

export default function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  )
}
