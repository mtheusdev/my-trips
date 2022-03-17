import LinkWrapper from '.'
import { screen, render } from '@testing-library/react'

describe('<LinkWrapper/>', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
