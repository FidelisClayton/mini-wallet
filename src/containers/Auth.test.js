import React from 'react'
import { shallow } from 'enzyme'

import { Auth } from './Auth'

describe('Component: <Auth />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Auth
        auth={{ error: null }}
        createUser={jest.fn()}
        checkCredentials={jest.fn()}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
