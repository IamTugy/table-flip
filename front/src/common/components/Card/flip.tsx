import React, {useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import {RowContainer} from "~/common/components/common";


type FlipType = {
  isFlipped: boolean
}

const CardWrapper = styled(animated.div)`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
`;

const CardFace = styled(animated.div)`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
`;


export const FrontCard: React.FC = ({children}) => {
  return <CardFace
    style={{
      transform: 'rotateY(180deg)',
    }}
  >
    {children}
  </CardFace>;
};


export const BackCard: React.FC = ({children}) => {
  return <CardFace>
    {children}
  </CardFace>;
};


export const Flip: React.FC<FlipType> = ({children, isFlipped}) => {
  const {transform} = useSpring({
    transform: `perspective(65rem) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 400, friction: 80},
  });

  return (
    <CardWrapper style={{transform}}>
      {children}
    </CardWrapper>
  );
};

export default Flip;
