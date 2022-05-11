import styled from 'styled-components'

const Container = styled.main`
  padding: 1em;
`

type AppProps = {
  children?: React.ReactNode
}

function App(props: AppProps) {
  return <Container {...props} />
}

App.defaultProps = {
  children: null,
}

export default App
