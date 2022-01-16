import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import {getColorByTendency} from '../../assets/styles/colors';
import {useSpring} from 'react-spring';
import {Tendency} from '../../data/consts';
import Flip from './flip';


const CardWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3rem;
  width: 22.5rem;
  height: 600px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardHeadline = styled.div<{tendency: Tendency}>`
  font-family: PoetsenOne;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${({tendency}) => getColorByTendency({tendency})};
`;

const CardContentText = styled.div`
  width: 17rem;
  font-family: Poly;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: black;
`;

const FrontCardWrapper = styled(CardWrapper)<{tendency: Tendency}>`
  box-sizing: border-box;
  border: 3px solid ${({tendency}) => getColorByTendency({tendency})};
`;


const BackCardWrapper = styled(CardWrapper)`
`;

export type CardContent = {
  frontIcon: ReactElement;
  backIcon: ReactElement;
  headline: string;
  description: string;
  tendency: Tendency;
  showDescription: boolean;
}


const FlipCard: React.FC = ({children}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const flipStyle = useSpring({
  //   to: {transform: 'rotateY(180deg)'},
  //   from: {transform: 'rotateY(0deg)'},
  // });
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      <Flip isFlipped={isFlipped}>
        {children}
      </Flip>
    </div>
  );
};


export const Card: React.FC<CardContent> = ({frontIcon, backIcon, headline, description, tendency, showDescription=false}) => {
  return (
    <FlipCard>
      <BackCardWrapper>
        {backIcon}
      </BackCardWrapper>
      <FrontCardWrapper tendency={tendency}>
        {frontIcon}
        <CardHeadline tendency={tendency}>{headline}</CardHeadline>
        {showDescription && <CardContentText>{description}</CardContentText>}
      </FrontCardWrapper>
    </FlipCard>
  );
};

export type GameCardContent = {
  backIcon: ReactElement;
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
}

const GameHeadline = styled.div`
  font-family: PoetsenOne;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
`;

export const GameCard: React.FC<GameCardContent> = ({backIcon, name, description, minPlayers=null, maxPlayers=null}) => {
  return (
    <FlipCard>
      <BackCardWrapper>
        {backIcon}
      </BackCardWrapper>
      <BackCardWrapper>
        <GameHeadline>{name}</GameHeadline>
        <CardContentText>{description}</CardContentText>
      </BackCardWrapper>
    </FlipCard>
  );
};
