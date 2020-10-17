/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'

import { RoundedSquareContainer } from './styles'
import { RoundedSquareButtonProps } from './types'

const RoundedSquareButton: React.FC<RoundedSquareButtonProps> = ({
  onPress,
  name,
  color,
  backgroundColor,
  size,
}) => {
  return (
    <RoundedSquareContainer
      onPress={onPress}
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2.8,
      }}
    >
      <Icon name={name} size={size / 2} color={color} />
    </RoundedSquareContainer>
  )
}

export default RoundedSquareButton
