import {hot} from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './common/components/globalStyles';
import {RowContainer} from './common/components/common';
import {Lobby} from '~/lobby/main';

const AppWrapper = styled(RowContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin: auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <RowContainer stretched>
          <Lobby/>
        </RowContainer>
      </AppWrapper>
    </>
  );
};

const renderApp = (Component: React.FC) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderApp(hot(App));
