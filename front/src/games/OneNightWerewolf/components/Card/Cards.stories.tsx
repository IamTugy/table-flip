import React from 'react';
import styled from 'styled-components';

import {ComponentMeta} from '@storybook/react';

import {Drunk, OneNightWerewolfCard, Seer, Werewolf} from '~/games/OneNightWerewolf/components/Card/Cards';


export default {
  title: 'Components/OneNightWerewolf/Cards',
  component: Werewolf,
  parameters: {
    frontIcon: {
      values: [
        {name: 'Werewolf', value: <Werewolf/>},
        {name: 'Drunk', value: <Drunk/>},
        {name: 'Seer', value: <Seer/>},
      ],
    },
  },
} as ComponentMeta<typeof OneNightWerewolfCard>;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  margin: auto;
  
  background-color: black;
`;

const Template = (args) => <Page><Werewolf/></Page>;

export const Primary = Template.bind({});

// Primary.args = {
//   frontIcon: {name: 'Werewolf', value: <Werewolf/>},
// };


