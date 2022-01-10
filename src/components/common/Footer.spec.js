import { render, screen } from '@testing-library/react'
import Footer from './Footer'

it('renders a heading', () => {
  render(<Footer />)

  const heading = screen.getByText("Thanks for visiting!")

  expect(heading).toBeInTheDocument()
})
