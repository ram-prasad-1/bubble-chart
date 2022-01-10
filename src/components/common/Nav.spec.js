import { render, screen } from '@testing-library/react'
import Nav from './Nav'

it('renders a heading', () => {
  render(<Nav />)

  const heading = screen.getByText("Awesome Bubble Chart ™", )

  expect(heading).toBeInTheDocument()
})
