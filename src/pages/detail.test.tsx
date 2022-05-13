import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import DetailPage from './detail'

describe('App', () => {
  it('renders', () => {
    const { container } = render(
      <MemoryRouter
        initialEntries={['/f05567cc-6ed3-40e0-bad1-7812478eecbe/so-far-gone']}
      >
        <DetailPage />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })
})
