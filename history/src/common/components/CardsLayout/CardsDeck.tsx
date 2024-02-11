import React, {createContext} from 'react'
import styled from 'styled-components'
import {useElementSize} from 'usehooks-ts'

import {RowContainer} from '~/common/components/common'


export type CardsDeckProps = {}


const Deck = styled(RowContainer)`
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export type CardPropsContextType = {
  width?: number
  height?: number
}
export const CardPropsContext = createContext({})


export const CardsDeck: React.FC<CardsDeckProps> = ({children}) => {
  // if (!children || !(typeof children === 'object' && 'length' in children)) {
  //   return null
  // }

  const [deskRef, {width, height}] = useElementSize()
  const cardWidth = width / (children?.length ?? 1)
  console.log({cardWidth, height})

  return (
    <Deck stretched ref={deskRef}>
      <CardPropsContext.Provider
        value={{width: cardWidth, height}}>
        {children}
      </CardPropsContext.Provider>
    </Deck>
  )
}

export default CardsDeck
