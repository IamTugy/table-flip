import React from 'react';

import {Card} from '~/common/components/Card/Card';
import WerewolfIcon from '../assets/cards/werewolf.svg';
import DrunkIcon from '../assets/cards/drunk.svg';
import SeerIcon from '../assets/cards/seer.svg';
import BackCardIcon from '../assets/cards/back_side.svg';
import {Tendency} from "~/OneNightWerewolf/consts";


export const Werewolf = () => {
  return <Card
    frontIcon={<WerewolfIcon/>}
    backIcon={<BackCardIcon/>}
    headline='Werewolf'
    description={`
            Your role is to not get caught.
            At night, open your eyes and look for other werewolves.
            If there’s only one werewolf, look at one of the center cards.
            `}
    tendency={Tendency.evil}
    showDescription
  />;
};


export const Drunk = () => {
  return <Card
    frontIcon={<DrunkIcon/>}
    backIcon={<BackCardIcon/>}
    headline='Drunk'
    description={`
            The Drunk exchanges his card with a card in the center and does not look at it.
            He's drunk so he has no idea which role he is.
            `}
    tendency={Tendency.good}
    showDescription
  />;
};


export const Seer = () => {
  return <Card
    frontIcon={<SeerIcon/>}
    backIcon={<BackCardIcon/>}
    headline='Seer'
    description={`
            At night the seer gets to see another player's card or two of thw cards in the center.
            `}
    tendency={Tendency.good}
    showDescription
  />;
};
