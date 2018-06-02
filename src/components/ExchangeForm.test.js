import React from 'react'
import { shallow } from 'enzyme'

import ExchangeForm from './ExchangeForm'

const wallet = {
  balance: 2,
  decimalPlaces: 8,
  exchangeable: true,
  id: 'btc',
  name: 'Bitcoin',
  token: 'BTC'
}

const realWallet = {
  balance: 100000,
  decimalPlaces: 2,
  exchangeable: false,
  id: 'brl',
  name: 'Real',
  token: 'BRL'
}

const prices = {
  buy: 28896,
  sell: 29099
}

describe('Component: <ExchangeForm />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <ExchangeForm
        wallet={wallet}
        prices={prices}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render details for sell', () => {
    const wrapper = shallow(
      <ExchangeForm
        wallet={wallet}
        prices={prices}
      />
    )

    expect(wrapper.find('.exchange-form__sell-details')).toHaveLength(2)
    expect(wrapper.find('.exchange-form__buy-details')).toHaveLength(0)
  })

  it('should render details for buy', () => {
    const wrapper = shallow(
      <ExchangeForm
        type="buy"
        wallet={wallet}
        prices={prices}
        realWallet={realWallet}
      />
    )

    expect(wrapper.find('.exchange-form__buy-details')).toHaveLength(2)
    expect(wrapper.find('.exchange-form__sell-details')).toHaveLength(0)
  })

  it('should render sell button', () => {
    const wrapper = shallow(
      <ExchangeForm
        wallet={wallet}
        prices={prices}
      />
    )

    expect(wrapper.find('.exchange-form__sell')).toHaveLength(1)
    expect(wrapper.find('.exchange-form__buy')).toHaveLength(0)
  })

  it('should render sell button', () => {
    const wrapper = shallow(
      <ExchangeForm
        type="buy"
        wallet={wallet}
        prices={prices}
        realWallet={realWallet}
      />
    )

    expect(wrapper.find('.exchange-form__buy')).toHaveLength(1)
    expect(wrapper.find('.exchange-form__sell')).toHaveLength(0)
  })

  it('should handle sell click', () => {
    const onSell = jest.fn(() => new Promise(resolve => resolve()))

    const wrapper = shallow(
      <ExchangeForm
        wallet={wallet}
        prices={prices}
        onSell={onSell}
      />
    )

    wrapper.find('.exchange-form__sell').simulate('click')

    expect(onSell.mock.calls).toHaveLength(1)
  })

  it('should handle buy click', () => {
    const onBuy = jest.fn(() => new Promise(resolve => resolve()))

    const wrapper = shallow(
      <ExchangeForm
        type="buy"
        wallet={wallet}
        prices={prices}
        onBuy={onBuy}
        realWallet={realWallet}
      />
    )

    wrapper.find('.exchange-form__buy').simulate('click')

    expect(onBuy.mock.calls).toHaveLength(1)
  })
})
