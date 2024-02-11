import {animated} from 'react-spring'
import styled, {css} from 'styled-components'


export type ContainerProps = {
  stretched?: boolean
  scrollable?: boolean
}
const commonStyle = css<ContainerProps>`
  display: flex;
  position: relative;
  flex: ${({stretched}) => stretched ? 1 : undefined};
  overflow: ${({scrollable}) => scrollable ? 'auto' : undefined};
  min-height: 0;
  min-width: 0;
`

export const RowContainer = styled.div<ContainerProps>`
  ${commonStyle}
`

export const AnimatedRowContainer = styled(animated.div)<ContainerProps>`
  ${commonStyle}
`

export const ColContainer = styled(RowContainer)`
  flex-direction: column;
`
