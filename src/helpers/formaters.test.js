import formaters from './formaters'

describe('Helper: formaters', () => {
  it('should format BRL with 2 decimal places', () => {
    const input = 1000
    const expected = '1.000,00'

    expect(formaters.brl(input)).toEqual(expected)
  })

  it('should format BTC with 8 decimal places', () => {
    const input = 1
    const expected = '1,00000000'

    expect(formaters.btc(input)).toEqual(expected)
  })

  it('should format BRT with 2 decimal places', () => {
    const input = 5
    const expected = '5,00'

    expect(formaters.brt(input)).toEqual(expected)
  })
})
