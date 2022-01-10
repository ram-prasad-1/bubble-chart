import { render, screen } from '@testing-library/react'
import AxisDecorations from './AxisDecorations'
import dataPoints from '@/mocks/dataPoints.json'

it('renders a text', () => {
  render(<AxisDecorations dataPoints={dataPoints} />)

  const heading = screen.getByText("Salary", )

  expect(heading).toBeInTheDocument()
})
