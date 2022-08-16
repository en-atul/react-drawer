import {render} from '@testing-library/react'
import React from 'react'

import Drawer from './Drawer'

describe('Drawer', () => {
  test('renders the Drawer component', () => {
    render(
      <Drawer
        show={false}
        onClose={() => {
          console.log('clicked')
        }}
      >
        <p>Hello Drawer</p>
      </Drawer>,
    )
  })
})
