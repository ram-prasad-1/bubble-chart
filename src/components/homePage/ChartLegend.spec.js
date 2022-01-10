import { render, screen } from '@testing-library/react'
import ChartLegend from './ChartLegend'

it('renders a heading', () => {
  render(<ChartLegend />)

  const heading = screen.getByText("cx: Salary, cy: HeadCount, radius: CompRatio", )

  expect(heading).toBeInTheDocument()
})
