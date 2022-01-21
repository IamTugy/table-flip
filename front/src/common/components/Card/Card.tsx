import React, {ReactElement, useEffect, useState} from 'react'
import {animated, useSpring} from 'react-spring'
import {useDrag} from '@use-gesture/react'
import styled from 'styled-components'

import {AnimatedRowContainer} from '~/common/components/common'

import {getColorByTendency} from '../../assets/styles/colors'
import {Tendency} from '../../data/consts'
import Flippable from './flippable'


const CardWrapper = styled(animated.div)`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  border-radius: 3rem;
  box-sizing: border-box;
  margin: auto;
  padding: 1rem;
  flex-direction: column;
  user-select: none;
`

const CardHeadline = styled.div<{tendency: Tendency}>`
  font-family: PoetsenOne;
  font-size: 2rem;
  line-height: 2;
  text-align: center;
  color: ${({tendency}) => getColorByTendency({tendency})};
`

const CardContentText = styled.div`
  font-family: Poly;
  padding: 0.1rem;
  font-size: 1.1rem;
  line-height: 1;
  text-align: center;
  color: black;
`

export const FrontCardWrapper = styled(CardWrapper)<{tendency: Tendency}>`
  transform: rotateY(180deg);
  box-sizing: border-box;
  border: 3px solid ${({tendency}) => getColorByTendency({tendency})};
`


export const BackCardWrapper = styled(CardWrapper)`
  & svg {
    width: 100%;
    height: 100%;
  };
`

export type CardContent = {
  frontIcon: ReactElement;
  backIcon: ReactElement;
  headline: string;
  description: string;
  tendency: Tendency;
  showDescription: boolean;
}

const CardContainer = styled(AnimatedRowContainer)`
  width: 22.5rem;
  aspect-ratio: 1.9 / 3;
  box-sizing: border-box;
  touch-action: none;
`


type CardProps = {
  flippable?: boolean
  swippable?: boolean
  FrontFace: React.ReactNode
  BackFace: React.ReactNode
};


const Card: React.FC<CardProps> = ({BackFace, FrontFace, flippable=false, swippable=false}) => {
  const to = {x: 0, y: 0}
  const [isFlipped, setIsFlipped] = useState(false)
  const [props, api] = useSpring(() => ({...to, from: {x: 0, y: -1000}}))

  const bind = useDrag(({memo, down, last, movement: [xDelta, yDelta], velocity, tap}) => {
    const trigger = Math.sqrt((velocity[0] ** 2) + (velocity[1] ** 2)) > 1.5
    const gone = memo?.gone || (last && trigger)
    tap && !down && setIsFlipped(!isFlipped)

    const alpha = Math.atan2(yDelta, xDelta)
    const [xVecDir, yVecDir] = [Math.cos(alpha), Math.sin(alpha)]

    api.start(() => {
      const x = gone ? ((500 + window.innerWidth) * xVecDir) : down ? xDelta : 0
      const y = gone ? ((500 + window.innerHeight) * yVecDir) : down ? yDelta : 0
      return swippable ? {x, y, delay: undefined, config: {friction: 50, tension: down ? 800 : gone ? 200 : 500}, immediate: down} : {}
    })
    // come back after 0.5 second:
    if (!down && gone) {
      // TODO: we dismissed the card call api / do action ...
      setTimeout(() => {
        api.start(() => to)
      }, 500)
    }

    return {
      gone,
    }
  })

  // const returnToUser = async () => {
  //   api.start(() => to)
  //   // TODO: we called return to user now user sees the card
  // }
  // const {registerReturnToUser} = useContext(GameContext)

  // useEffect(() => {
  //   const unsubscribe = registerReturnToUser(returnToUser)
  //   return () => unsubscribe()
  // }, [returnToUser, registerReturnToUser])

  let component = <>
    {BackFace}
    {FrontFace}
  </>
  if (flippable) {
    component = (
      <Flippable isFlipped={isFlipped}>
        {component}
      </Flippable>
    )
  }

  return <CardContainer
    {...bind()}
    style={props}
  >
    {component}
  </CardContainer>
}


export const GameCard: React.FC<CardContent> = (
  {
    frontIcon,
    backIcon,
    headline,
    description,
    tendency,
    showDescription = false,
  }) => {
  return (
    <Card flippable swippable
          BackFace={
            <BackCardWrapper>
              {backIcon}
            </BackCardWrapper>
          }
          FrontFace={
            <FrontCardWrapper tendency={tendency}>
              {frontIcon}
              <CardHeadline tendency={tendency}>{headline}</CardHeadline>
              {showDescription && <CardContentText>{description}</CardContentText>}
            </FrontCardWrapper>
          }
    />
  )
}

export type GameCardContent = {
  backIcon: ReactElement;
  name: string;
  description: string;
}

const GameHeadline = styled.div`
  font-family: PoetsenOne;
  font-size: 2rem;
  line-height: 38px;
  text-align: center;
`

export const GameRulesCard: React.FC<GameCardContent> = ({backIcon, name, description}) => {
  return (
    <Card flippable
          BackFace={
            <BackCardWrapper>
              {backIcon}
            </BackCardWrapper>
          }
          FrontFace={
            <BackCardWrapper style={{transform: 'rotateY(180deg)'}}>
              <GameHeadline>{name}</GameHeadline>
              <CardContentText>{description}</CardContentText>
            </BackCardWrapper>
          }
    />
  )
}

export default Card
