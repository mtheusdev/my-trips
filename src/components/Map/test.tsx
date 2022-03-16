import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the makert in correct place', () => {
    const place = {
      id: '1',
      name: 'Joinville',
      slug: 'joinville',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const plac2 = {
      id: '2',
      name: 'Blumenau',
      slug: 'blumenau',
      location: {
        latitude: 129,
        longitude: 50
      }
    }

    render(<Map places={[place, plac2]} />)

    expect(screen.getByTitle(/Joinville/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Blumenau/i)).toBeInTheDocument()
  })
})
