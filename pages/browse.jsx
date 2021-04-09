import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'
import BrowseContainer from '../containers/BrowseContainer'
import { ProtectedRoute } from '../helpers/routes'

export default function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films })

  return (
    <ProtectedRoute>
      <BrowseContainer slides={slides} />
    </ProtectedRoute>
  )
}
