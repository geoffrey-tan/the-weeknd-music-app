import { Spinner } from 'grommet'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function Loader() {
  return (
    <Container>
      <Spinner size="medium" />
    </Container>
  )
}

export default Loader
