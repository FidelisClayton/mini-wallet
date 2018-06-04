import React from 'react'
import { shallow } from 'enzyme'

import { Currencies } from './Currencies'

const wallets = [
  {
    token: 'BRL',
    name: 'Real',
    balance: 0,
    exchangeable: true,
    currency: 'brl'
  }
]

const prices = {
  tokens: {
    brl: {
      buy: 0,
      sell: 0
    }
  }
}

describe('Component: <Currencies />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Currencies
        wallets={wallets}
        prices={prices}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render currencies', () => {
    const wrapper = shallow(
      <Currencies
        wallets={wallets}
        prices={prices}
      />
    )

    expect(wrapper.find('Currency')).toHaveLength(1)
  })

  it('should open modal when handleSell is invoked', () => {
    const openModal = jest.fn()

    const wrapper = shallow(
      <Currencies
        wallets={wallets}
        prices={prices}
        openModal={openModal}
        user={{ _id: 'user@provider.com' }}
      />
    )

    const instance = wrapper.instance()

    instance.handleSell({
      name: 'Real',
      balance: 0,
      decimalPlaces: 2,
      token: 'brl'
    })()

    expect(openModal.mock.calls.length).toEqual(1)
  })

  it('should open modal when handleBuy is invoked', () => {
    const openModal = jest.fn()

    const wrapper = shallow(
      <Currencies
        wallets={wallets}
        prices={prices}
        openModal={openModal}
        user={{ _id: 'user@provider.com' }}
      />
    )

    const instance = wrapper.instance()

    instance.handleBuy({
      name: 'Real',
      balance: 0,
      decimalPlaces: 2,
      token: 'brl'
    })()

    expect(openModal.mock.calls.length).toEqual(1)
  })

  it('should handle makeTransaction', () => {
    const createTransaction = jest.fn(() => new Promise(resolve => resolve()))
    const fetchUser = jest.fn()

    const wrapper = shallow(
      <Currencies
        wallets={wallets}
        prices={prices}
        createTransaction={createTransaction}
        fetchUser={fetchUser}
        user={{ _id: 'user@provider.com' }}
      />
    )

    const instance = wrapper.instance()

    instance.makeTransaction('userId')({})

    expect(createTransaction.mock.calls.length).toEqual(1)
  })
})
