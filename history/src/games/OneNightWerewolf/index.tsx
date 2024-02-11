import React, {useEffect} from 'react'

import {GameCard} from '~/common/components/Card/Card'
import {setCards} from '~/common/components/Card/cardsSlice'
import CardsDeck from '~/common/components/CardsLayout/CardsDeck'
import {drunk, seer, werewolf} from '~/games/OneNightWerewolf/components/Card/Cards'
import {useAppDispatch, useAppSelector} from '~/store/hooks'


export const Game = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setCards([werewolf, seer, drunk]))
  }, [dispatch])

  const cards = useAppSelector((state) => state.cards.cards)

  return (
    <CardsDeck>
      {cards.map((card, index) => (<GameCard key={`card-${index}`} cardIndex={index}/>))}
    </CardsDeck>
  )
}

export default Game
