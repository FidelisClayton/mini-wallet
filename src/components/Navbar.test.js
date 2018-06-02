import React from 'react'
import { shallow } from 'enzyme'

import Navbar from './Navbar'

describe('Component: <Navbar />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Navbar
        location={{ pathname: '/home' }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
