import React from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';


type FlipType = {
  isFlipped: boolean
}

const CardWrapper = styled(animated.div)`
  transform-style: preserve-3d;
`;

const CardFace = styled(animated.div)`
  backface-visibility: hidden;
`;


export const Flip: React.FC<FlipType> = ({children, isFlipped}) => {
  const {transform} = useSpring({
    transform: `perspective(900px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 400, friction: 80},
  });
  return (
    <CardWrapper style={{transform}}>
      <CardFace
        style={{position: 'absolute'}}
      >
        {children[0]}
      </CardFace>
      <CardFace
        style={{
          transform: 'rotateY(180deg)',
        }}
      >
        {children[1]}
      </CardFace>
    </CardWrapper>
  );
};

export default Flip;
