import React, {ReactElement} from 'react'

import {GameCard} from '~/common/components/Card/Card'
import {Tendency} from '~/common/data/consts'
import BackCardIcon from '~/games/OneNightWerewolf/assets/cards/back_side.svg'
import DrunkIcon from '~/games/OneNightWerewolf/assets/cards/drunk.svg'
import SeerIcon from '~/games/OneNightWerewolf/assets/cards/seer.svg'
import WerewolfIcon from '~/games/OneNightWerewolf/assets/cards/werewolf.svg'


export type OneNightWerewolfCardContent = {
  frontIcon: ReactElement;
  headline: string;
  description: string;
  tendency: Tendency;
  showDescription: boolean;
}

export const OneNightWerewolfCard: React.FC<OneNightWerewolfCardContent> = (args) => {
  return <GameCard
    backIcon={<BackCardIcon/>}
    {...args}
  />
}


export const Werewolf = () => {
  return <OneNightWerewolfCard
    frontIcon={<WerewolfIcon/>}
    headline='Werewolf'
    description={`
            Your role is to not get caught.
            At night, open your eyes and look for other werewolves.
            If there’s only one werewolf, look at one of the center cards.
            `}
    tendency={Tendency.evil}
    showDescription
  />
}


export const Drunk = () => {
  return <OneNightWerewolfCard
    frontIcon={<DrunkIcon/>}
    headline='Drunk'
    description={`
            The Drunk exchanges his card with a card in the center and does not look at it.
            He's drunk so he has no idea which role he is.
            `}
    tendency={Tendency.good}
    showDescription
  />
}


export const Seer = () => {
  return <OneNightWerewolfCard
    frontIcon={<SeerIcon/>}
    headline='Seer'
    description={`
            At night the seer gets to see another player's card or two of thw cards in the center.
            `}
    tendency={Tendency.good}
    showDescription
  />
}
