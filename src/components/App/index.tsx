type AppProps = {
  children?: React.ReactNode
}

function App(props: AppProps) {
  return <div {...props} />
}

App.defaultProps = {
  children: null,
}

export default App
