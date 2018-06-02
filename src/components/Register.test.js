import React from 'react'
import { shallow } from 'enzyme'

import Register from './Register'

describe('Component: <Register />', () => {
  it('should properly render', () => {
    const wrapper = shallow(
      <Register
        onClick={jest.fn()}
        onSubmit={jest.fn()}
        active={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should handle title click', () => {
    const onClick = jest.fn()

    const wrapper = shallow(
      <Register
        onClick={onClick}
        onSubmit={jest.fn()}
        active={false}
      />
    )

    wrapper.find('.card__title--bottom').simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
