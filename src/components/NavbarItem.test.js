import React from 'react'
import { shallow } from 'enzyme'

import NavbarItem from './NavbarItem'

describe('Component: <NavbarItem />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <NavbarItem
        to={'/home'}
        text={'Home'}
        active={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
