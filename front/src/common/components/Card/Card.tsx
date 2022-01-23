import {useDrag} from '@use-gesture/react'
import React, {ReactElement, useContext, useState} from 'react'
import {animated, useSpring} from 'react-spring'
import styled from 'styled-components'

import {CardPropsContext, CardPropsContextType} from '~/common/components/CardsLayout/CardsDeck'
import {AnimatedRowContainer} from '~/common/components/common'

import {getColorByTendency} from '../../assets/styles/colors'
import {Tendency} from '../../data/consts'
import Flippable from './flippable'


const cardRatio = 1.9 / 3


const CardWrapper = styled(animated.div)`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  border-radius: 2rem;
  box-sizing: border-box;
  margin: auto;
  padding: 1rem;
  flex-direction: column;
  user-select: none;
`

const CardInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 35%;
  padding: 0.5rem;
`

const CardHeadline = styled.div<{ tendency: Tendency }>`
  font-family: PoetsenOne;
  font-size: 7vh;
  line-height: 1.2;
  text-align: center;
  color: ${({tendency}) => getColorByTendency({tendency})};
`

const CardContentText = styled.div`
  font-family: Poly;
  padding: 0.1rem;
  font-size: 3vh;
  line-height: 1;
  text-align: center;
  color: black;
`

export const FrontCardWrapper = styled(CardWrapper)<{ tendency: Tendency }>`
  transform: rotateY(180deg);
  box-sizing: border-box;
  border: 3px solid ${({tendency}) => getColorByTendency({tendency})};
`


export const BackCardWrapper = styled(CardWrapper)`
  & svg {
    width: 100%;
    height: 100%;
  }
;
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
  box-sizing: border-box;
  touch-action: none;
  padding: 1rem;
  max-width: 100%;
  max-height: 100%;
`


type CardProps = {
  flippable?: boolean
  swippable?: boolean
  FrontFace: React.ReactNode
  BackFace: React.ReactNode
};


const Card: React.FC<CardProps> = ({BackFace, FrontFace, flippable = false, swippable = false}) => {
  const cardBoundaries: CardPropsContextType = useContext(CardPropsContext)

  const calculateCardBoundaries = () => {
    const {width, height} = cardBoundaries
    if (!width || !height) return {}
    console.log({width, height})
    if (width > height) {
      const newWidth = height * cardRatio
      if (newWidth <= width) return {width: newWidth, height}
      const newHeight = width * (1 / cardRatio)
      return {width, height: newHeight}
    }

    const newHeight = width * (1 / cardRatio)
    if (newHeight <= height) return {width, height: newHeight}
    const newWidth = height * cardRatio
    return {width: newWidth, height}
  }

  const
    to = {x: 0, y: 0}
  const [isFlipped, setIsFlipped] = useState(false)
  const [props, api] = useSpring(() => ({...to, from: {x: 0, y: -1000}}))

  const bind = useDrag(({memo, active, down, last, movement: [xDelta, yDelta], velocity, tap}) => {
    const trigger = Math.sqrt((velocity[0] ** 2) + (velocity[1] ** 2)) > 1.5
    const gone = memo?.gone || (last && trigger)
    tap && !down && setIsFlipped(!isFlipped)

    const alpha = Math.atan2(yDelta, xDelta)
    const [xVecDir, yVecDir] = [Math.cos(alpha), Math.sin(alpha)]

    api.start(() => {
      const x = gone ? ((500 + window.innerWidth) * xVecDir) : down ? xDelta : 0
      const y = gone ? ((500 + window.innerHeight) * yVecDir) : down ? yDelta : 0
      return swippable ? {
        x,
        y,
        zIndex: active ? 2 : 1,
        delay: undefined,
        config: {friction: 50, tension: down ? 800 : gone ? 200 : 500},
        immediate: down,
      } : {}
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

  return (
    <CardContainer
      {...bind()}
      style={{...props, ...calculateCardBoundaries()}}
    >
      {component}
    </CardContainer>
  )
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
              <CardInfo>
                <CardHeadline tendency={tendency}>{headline}</CardHeadline>
                {showDescription && <CardContentText>{description}</CardContentText>}
              </CardInfo>
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
