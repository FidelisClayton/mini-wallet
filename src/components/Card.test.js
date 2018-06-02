import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Component: <Card />', () => {
  it ('should render properly', () => {
    const wrapper = shallow(
      <Card>
        Hello
      </Card>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
