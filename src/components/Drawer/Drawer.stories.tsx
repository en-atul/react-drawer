import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import Drawer from './Drawer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = args => <Drawer {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <p>Hello drawer</p>,
  show: true,
  drawerStyle: {padding: 20},
}
