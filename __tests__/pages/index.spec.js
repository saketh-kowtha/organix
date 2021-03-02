import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Home from '../../src/pages/index'
describe('[PAGE] - index', () => {
  it('should work', () => {
    render(<Home />)
    expect(screen.getByText("It's working")).toBeInTheDocument()
  })
})
