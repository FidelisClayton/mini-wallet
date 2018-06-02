import React from 'react'
import { shallow } from 'enzyme'

import Currency from './Currency'

const bitcoin = {
  name: 'Bitcoin',
  currency: 'BTC',
  price: 29070,
  total: 2 * 29070,
  amount: 2,
  exchangeable: true,
  onSell: jest.fn(),
  onBuy: jest.fn()
}

const real = {
  name: 'Real',
  amount: 100000,
  currency: 'BRL',
  exchangeable: false
}

const brita = {
  name: 'Brita',
  currency: 'BRT',
  price: 3.76,
  total: 2 * 3.76,
  amount: null,
  exchangeable: true,
  onSell: jest.fn(),
  onBuy: jest.fn()
}

describe('Component: <Currency />', () => {
  it('should properly render', () => {
    const wrapper = shallow(
      <Currency {...bitcoin} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should not render action buttons for a non exchangeable coin', () => {
    const wrapper = shallow(
      <Currency {...real} />
    )

    expect(wrapper.find('.currency__actions')).toHaveLength(0)
  })

  it('should not display price for a non exchangeable coin', () => {
    const wrapper = shallow(
      <Currency {...real} />
    )

    expect(wrapper.find('.currency__price')).toHaveLength(0)
  })

  it('should not render amount if the amount value is not provided', () => {
    const wrapper = shallow(
      <Currency {...brita} />
    )

    expect(wrapper.find('.currency__amount')).toHaveLength(0)
  })

  it('should handle buy click', () => {
    const onBuy = jest.fn()

    const wrapper = shallow(
      <Currency
        {...bitcoin}
        onBuy={onBuy}
      />
    )

    wrapper.find('.currency__buy').simulate('click')

    expect(onBuy.mock.calls).toHaveLength(1)
  })

  it('should handle sell click', () => {
    const onSell = jest.fn()

    const wrapper = shallow(
      <Currency
        {...bitcoin}
        onSell={onSell}
      />
    )

    wrapper.find('.currency__sell').simulate('click')

    expect(onSell.mock.calls).toHaveLength(1)
  })
})
