import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import {getColorByTendency} from '../../assets/styles/colors';
import {Tendency} from '~/OneNightWerewolf/consts';


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


export const Card: React.FC<CardContent> = ({frontIcon, backIcon, headline, description, tendency, showDescription=false}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <BackCardWrapper onClick={() => setIsFlipped(true)}>
        {backIcon}
      </BackCardWrapper>
      <FrontCardWrapper onClick={() => setIsFlipped(false)} tendency={tendency}>
        {frontIcon}
        <CardHeadline tendency={tendency}>{headline}</CardHeadline>
        {showDescription && <CardContentText>{description}</CardContentText>}
      </FrontCardWrapper>
    </ReactCardFlip>
  );
};
