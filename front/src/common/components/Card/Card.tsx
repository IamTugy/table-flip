import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import {getColorByTendency} from '../../assets/styles/colors';
import {useSpring} from 'react-spring';
import {Tendency} from '../../data/consts';
import Flip, {BackCard, FrontCard} from './flip';
import {RowContainer} from "~/common/components/common";


const CardWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3rem;
  box-sizing: border-box;
  margin: auto;
  padding: 1rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const CardHeadline = styled.div<{tendency: Tendency}>`
  font-family: PoetsenOne;
  font-size: 2rem;
  line-height: 2;
  text-align: center;
  color: ${({tendency}) => getColorByTendency({tendency})};
`;

const CardContentText = styled.div`
  font-family: Poly;
  padding: 0.1rem;
  font-size: 1.1rem;
  line-height: 1;
  text-align: center;
  color: black;
`;

const FrontCardWrapper = styled(CardWrapper)<{tendency: Tendency}>`
  box-sizing: border-box;
  border: 3px solid ${({tendency}) => getColorByTendency({tendency})};
`;


const BackCardWrapper = styled(CardWrapper)`
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export type CardContent = {
  frontIcon: ReactElement;
  backIcon: ReactElement;
  headline: string;
  description: string;
  tendency: Tendency;
  showDescription: boolean;
}

const CardContainer = styled(RowContainer)`
  width: 22.5rem;
  aspect-ratio: 1.9 / 3;
  box-sizing: border-box;
`;


const FlipCard: React.FC = ({children}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <CardContainer onClick={() => setIsFlipped(!isFlipped)}>
      <Flip isFlipped={isFlipped}>
        {children}
      </Flip>
    </CardContainer>
  );
};


export const Card: React.FC<CardContent> = ({frontIcon, backIcon, headline, description, tendency, showDescription=false}) => {
  return (
    <FlipCard>
      <BackCard>
        <BackCardWrapper>
          {backIcon}
        </BackCardWrapper>
      </BackCard>
      <FrontCard>
        <FrontCardWrapper tendency={tendency}>
          {frontIcon}
          <CardHeadline tendency={tendency}>{headline}</CardHeadline>
          {showDescription && <CardContentText>{description}</CardContentText>}
        </FrontCardWrapper>
      </FrontCard>
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
  font-size: 2rem;
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
