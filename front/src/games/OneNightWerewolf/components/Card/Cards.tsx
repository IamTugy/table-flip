import React from 'react'

import {Tendency} from '~/common/data/consts'
import BackCardIcon from '~/games/OneNightWerewolf/assets/cards/back_side.svg'
import DrunkIcon from '~/games/OneNightWerewolf/assets/cards/drunk.svg'
import SeerIcon from '~/games/OneNightWerewolf/assets/cards/seer.svg'
import WerewolfIcon from '~/games/OneNightWerewolf/assets/cards/werewolf.svg'


export const werewolf = {
  frontIcon: <WerewolfIcon/>,
  backIcon: <BackCardIcon/>,
  headline: 'Werewolf',
  description: `
            Your role is to not get caught.
            At night, open your eyes and look for other werewolves.
            If there’s only one werewolf, look at one of the center cards.
            `,
  tendency: Tendency.evil,
  showDescription: true,
}

export const drunk = {
  frontIcon: <DrunkIcon/>,
  backIcon: <BackCardIcon/>,
  headline: 'Drunk',
  description: `
            The Drunk exchanges his card with a card in the center and does not look at it.
            He's drunk so he has no idea which role he is.
            `,
  tendency: Tendency.good,
  showDescription: true,
}

export const seer = {
  frontIcon: <SeerIcon/>,
  backIcon: <BackCardIcon/>,
  headline: 'Seer',
  description: `
            At night the seer gets to see another player's card or two of thw cards in the center.
            `,
  tendency: Tendency.good,
  showDescription: true,
}
