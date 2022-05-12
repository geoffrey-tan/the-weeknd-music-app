import styled from 'styled-components'

const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 1em;

  a {
    color: #000;
    text-decoration: none;
  }
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
