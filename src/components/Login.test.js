import React from 'react'
import { shallow } from 'enzyme'

import Login from './Login'

describe('Component: <Login />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Login
        onClick={jest.fn()}
        error={null}
        active={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render error', () => {
    const wrapper = shallow(
      <Login
        onClick={jest.fn()}
        error={'Error'}
        active={true}
      />
    )

    expect(wrapper.find('.login__error').text()).toEqual('Error')
  })

  it('should not render error when Login is not active', () => {
    const wrapper = shallow(
      <Login
        onClick={jest.fn()}
        error={'Error'}
        active={false}
      />
    )

    expect(wrapper.find('.login__error')).toHaveLength(0)
  })

  it('should handle click on title', () => {
    const onClick = jest.fn()

    const wrapper = shallow(
      <Login
        onClick={jest.fn()}
        error={null}
        active={true}
        onClick={onClick}
      />
    )

    wrapper.find('.card__title').simulate('click')

    expect(onClick.mock.calls.length).toEqual(1)
  })
})
