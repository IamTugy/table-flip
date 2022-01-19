import React from 'react';
import styled from 'styled-components';

import {ComponentMeta} from '@storybook/react';

import {OneNightWerewolfCard, Werewolf} from '~/games/OneNightWerewolf/components/Card/Cards';


export default {
  title: 'Components/OneNightWerewolf/Cards/Werewolf',
  component: Werewolf,
} as ComponentMeta<typeof OneNightWerewolfCard>;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  
  background-color: black;
`;

const Template = () => <Page><Werewolf/></Page>;

export const Roles = Template.bind({});
