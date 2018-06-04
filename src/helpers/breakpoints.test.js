import * as breakpoints from './breakpoints'

describe('Helper: breakpoints', () => {
  it ('should return correct styles for extra small media query', () => {
    const input = { color: 'red' }
    const expected = { '@media (min-width: 480px)': { color: 'red' }}

    expect(breakpoints.extraSmall(input)).toEqual(expected)
  })

  it('should return correct styles for small media query', () => {
    const input = { color: 'red' }
    const expected = { '@media (min-width: 768px)': { color: 'red' }}

    expect(breakpoints.small(input)).toEqual(expected)
  })

  it('should return correct styles for medium query', () => {
    const input = { color: 'red' }
    const expected = { '@media (min-width: 960px)': { color: 'red' }}

    expect(breakpoints.medium(input)).toEqual(expected)
  })

  it('should return correct styles for large media query', () => {
    const input = { color: 'red' }
    const expected = { '@media (min-width: 1120px)': { color: 'red' }}

    expect(breakpoints.large(input)).toEqual(expected)
  })

  it('should return correct styles for small media query', () => {
    const input = { color: 'red' }
    const expected = { '@media (min-width: 1280px)': { color: 'red' }}

    expect(breakpoints.extraLarge(input)).toEqual(expected)
  })
})
