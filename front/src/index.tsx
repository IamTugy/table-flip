import {hot} from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './components/globalStyles';
import {ColContainer, RowContainer} from './components/common';
import Werewolf from './assets/cards/werewolf.svg';
import {Card} from '~/components/Card/Card.tsx';
import {Tendency} from '~/consts';

const AppWrapper = styled(RowContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <ColContainer stretched>
          <Card
            image={<Werewolf/>}
            headline='Werewolf'
            description={`
            Your role is to not get caught.
            At night, open your eyes and look for other werewolves.
            If there’s only one werewolf, look at one of the center cards.
            `}
            tendency={Tendency.evil}
            showDescription
          />
        </ColContainer>
      </AppWrapper>
    </>
  );
};

const renderApp = (Component: React.FC) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderApp(hot(App));
