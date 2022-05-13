import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import IndexPage from '.'

jest.mock('../api/Albums')

describe('App', () => {
  it('renders', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <IndexPage />
      </MemoryRouter>
    )
    await screen.findByText('Album Name')

    expect(container).toMatchSnapshot()
  })
})
