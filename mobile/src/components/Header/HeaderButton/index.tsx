import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'

import { BorderlessButtonContainer } from './styles'
import { HeaderButtonProps } from './types'

const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon,
  onPress,
  color,
}) => {
  return (
    <BorderlessButtonContainer onPress={onPress}>
      <Icon name={icon} size={24} color={color} />
    </BorderlessButtonContainer>
  )
}

export default HeaderButton
