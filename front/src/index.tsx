import {hot} from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './common/components/globalStyles';
import {ColContainer, RowContainer} from './common/components/common';
import {Drunk, Seer, Werewolf} from '~/OneNightWerewolf/components/Cards';

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
        <RowContainer stretched>
          <Werewolf/>
          <Drunk/>
          <Seer/>
        </RowContainer>
      </AppWrapper>
    </>
  );
};

const renderApp = (Component: React.FC) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderApp(hot(App));
