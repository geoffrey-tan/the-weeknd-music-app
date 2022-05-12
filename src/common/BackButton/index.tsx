import { Previous } from 'grommet-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

function BackButton() {
  return (
    <StyledLink to="/">
      <Previous />
      Back
    </StyledLink>
  )
}

export default BackButton
