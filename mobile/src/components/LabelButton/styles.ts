import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { ContainerProps } from './types'

const { width: wWidth } = Dimensions.get('screen')

export const RoundedRectContainer = styled(RectButton)<ContainerProps>`
  width: ${wWidth - 48}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 16px;
  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      bottom: 32px;
      margin: 0 24px;
    `}
`

export const Label = styled.Text`
  padding: 0 16px;
  font-family: nunito800;
`
