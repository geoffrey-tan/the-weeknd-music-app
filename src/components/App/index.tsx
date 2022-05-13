import styled from 'styled-components'

const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  a {
    color: #000;
    text-decoration: none;
  }

  padding: 2em;

  /** @breakpoints https://v2.grommet.io/responsivecontext */
  @media (min-width: 768px) {
    padding: 2em 10em;
  }

  @media (min-width: 1536px) {
    padding: 2em 20em;
  }
`

function App(props: { children?: React.ReactNode }) {
  return <Container {...props} />
}

App.defaultProps = {
  children: null,
}

export default App
