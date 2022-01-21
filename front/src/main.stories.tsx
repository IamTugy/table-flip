import {ComponentMeta} from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import {App} from './index'


export default {
  title: 'Components/main',
  component: App,
} as ComponentMeta<typeof App>


const Template = () => <App/>

export const Roles = Template.bind({})
