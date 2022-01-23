import React from 'react'

import {GameRulesCard} from '~/common/components/Card/Card'
import CardsDeck from '~/common/components/CardsLayout/CardsDeck'
import {Drunk, Seer, Werewolf} from '~/games/OneNightWerewolf/components/Card/Cards'


export default () => {
  return (
    <CardsDeck>
      <Werewolf/>
      <Seer/>
      <Drunk/>
      {/* <GameRulesCard*/}
      {/*  backIcon={<BackCardIcon/>}*/}
      {/*  name="One Night Werewolf"*/}
      {/*  description={`*/}
      {/*    One Night Ultimate Werewolf is a fast game for 3-10 players in which everyone gets a role: */}
      {/*    One of the dastardly Werewolves, the tricky Troublemaker, the helpful Seer, or one of a dozen different */}
      {/*    characters, each with a special ability. In the course of a single morning, your village will decide who is a */}
      {/*    werewolf...because all it takes is lynching one werewolf to win!*/}
      {/*  `}*/}
      {/* />*/}
    </CardsDeck>
  )
}
