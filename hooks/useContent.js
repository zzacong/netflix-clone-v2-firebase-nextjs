import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../contexts/FirebaseContext'
// import { db } from '../config/firebase'

export default function useContent(target) {
  const { db } = useContext(FirebaseContext)
  const [content, setContent] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const snapshot = await db.collection(target).get()
        const allContent = snapshot.docs.map(contentObj => ({
          docId: contentObj.id,
          ...contentObj.data(),
        }))
        setContent(allContent)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [target])

  return { [target]: content }
}
