import React from 'react';
import {useSpring, a} from 'react-spring';


type FlipType = {
  isFlipped: boolean
}

export const Flip: React.FC<FlipType> = ({children, isFlipped}) => {
  const {transform, opacity} = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
  });
  return (
    <div>
      <a.div
        style={{position: 'absolute', opacity: opacity.to((o) => 1 - o), transform}}
      >
        {children[0]}
      </a.div>
      <a.div
        style={{
          opacity,
          transform,
          rotateY: '180deg',
        }}
      >
        {children[1]}
      </a.div>
    </div>
  );
};

export default Flip;
