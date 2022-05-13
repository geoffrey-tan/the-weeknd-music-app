import styled from 'styled-components'

const StyledLi = styled.li`
  :nth-child(2n) {
    background: whitesmoke;
  }
`

function List(props: { children: React.ReactNode }) {
  return <ol {...props} />
}

function Item(props: { children: React.ReactNode }) {
  return <StyledLi {...props} />
}

export { Item }
export default List
