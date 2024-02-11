import {combineReducers} from '@reduxjs/toolkit'

// import {persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import cardsReducer from '~/common/components/Card/cardsSlice'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

export const rootReducer = combineReducers({
  cards: cardsReducer, // persistReducer(persistConfig, cardsReducer), // im not sure if it needs to be persist
})

export default rootReducer
