import {hot} from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './components/globalStyles';
import {RowContainer, ColContainer} from './components/common';
import {Card} from '~/components/Card/Card';

const AppWrapper = styled(RowContainer)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <ColContainer stretched scrollable>
          <Card/>
        </ColContainer>
      </AppWrapper>
    </>
  );
};

const renderApp = (Component: React.FC) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderApp(hot(App));
