import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import styled from 'styled-components'

import {Game} from '~/games/OneNightWerewolf'
import store, {persistor} from '~/store'

import {RowContainer} from './common/components/common'
import GlobalStyle from './common/components/globalStyles'

const AppWrapper = styled(RowContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: black;
  min-height: 0;
  min-width: 0;
`

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <RowContainer stretched>
          <Game/>
        </RowContainer>
      </AppWrapper>
    </>
  )
}

const renderApp = (Component: React.FC) => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component/>
      </PersistGate>
    </Provider>
    , document.getElementById('root'),
  )
}

renderApp(App)


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration)
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
