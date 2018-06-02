import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Component: <Button />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Button>Button</Button>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
