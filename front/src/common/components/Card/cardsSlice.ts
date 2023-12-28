import {createSlice} from '@reduxjs/toolkit'
import {ReactElement} from 'react'

import {Tendency} from '~/common/data/consts'

type cardType = {
  x: number,
  y: number,
  clicked: boolean,
  inMotion: boolean,
  flipped: boolean,
  showDescription: boolean;
  frontIcon?: ReactElement;
  backIcon?: ReactElement;
  tendency: Tendency;
  headline: string;
  description?: string;
}

type cardsSliceType = {
  cards: cardType[],
}

const initialState: cardsSliceType = {
  cards: [],
}

const initialCard: cardType = {
  x: 0,
  y: 0,
  clicked: false,
  inMotion: false,
  flipped: false,
  showDescription: false,
  tendency: Tendency.good,
  headline: '',
}

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    setCards(state, action) {
      const {cards} = action.payload
      state.cards = cards.map((card: cardType) => ({...initialCard, ...card}))
    },
    addCard(state, action) {
      state.cards.push({...initialCard, ...action.payload})
    },
    flipCard(state, action) {
      const {cardIndex} = action.payload
      state.cards[cardIndex].flipped = !state.cards[cardIndex].flipped
    },
  },
})

export const {
  setCards, addCard, flipCard,
} = cardsSlice.actions

export default cardsSlice.reducer
