import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'

import { IconTypeProps } from './types'

const IconType: React.FC<IconTypeProps> = ({ name, color, size, iconType }) => {
  return iconType === 'FontAwesome' ? (
    <FontAwesome name={name} size={size / 1.3} color={color} />
  ) : (
    <Feather name={name} size={size / 1.3} color={color} />
  )
}

export default IconType
