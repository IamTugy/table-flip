import React from 'react'
import {animated, useSpring} from 'react-spring'
import styled from 'styled-components'


type FlipType = {
  isFlipped: boolean
}

const FlippableWrapper = styled(animated.div)`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
`


export const Flippable: React.FC<FlipType> = ({children, isFlipped}) => {
  const {transform} = useSpring({
    transform: `perspective(65rem) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 400, friction: 80},
  })

  return (
    <FlippableWrapper style={{transform}}>
      {children}
    </FlippableWrapper>
  )
}

export default Flippable
