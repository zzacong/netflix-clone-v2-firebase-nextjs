import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth, useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'
import BrowseContainer from '../containers/BrowseContainer'

export default function Browse() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films })

  useEffect(() => {
    if (!user && !loading) router.push('/signin')
  }, [user, loading])

  if (user) return <BrowseContainer slides={slides} />
  return null
}
