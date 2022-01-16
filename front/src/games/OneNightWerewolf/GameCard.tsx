import React from 'react';
import BackCardIcon from './assets/cards/back_side.svg';

import {GameCard} from '~/common/components/Card/Card';
import {Werewolf} from "~/games/OneNightWerewolf/components/Card/Cards";

export default () => {
  return (
    <>
      <Werewolf/>
      <GameCard
        backIcon={<BackCardIcon/>}
        name='One Night Werewolf'
        description={`
          One Night Ultimate Werewolf is a fast game for 3-10 players in which everyone gets a role: 
          One of the dastardly Werewolves, the tricky Troublemaker, the helpful Seer, or one of a dozen different 
          characters, each with a special ability. In the course of a single morning, your village will decide who is a 
          werewolf...because all it takes is lynching one werewolf to win!
        `}
        minPlayers={3}
        maxPlayers={10}
      />
    </>
  );
};
