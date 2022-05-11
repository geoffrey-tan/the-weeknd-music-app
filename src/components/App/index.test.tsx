import { render } from '@testing-library/react'
import App from '.'

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
