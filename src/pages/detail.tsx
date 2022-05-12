import { useParams } from 'react-router-dom'

import BackButton from '../common/BackButton'

function DetailPage() {
  const { id } = useParams()

  return (
    <div>
      <BackButton />
      <h1>{id}</h1>
      <ul>
        <li>Track Name</li>
      </ul>
    </div>
  )
}

export default DetailPage
