import React from 'react'

import IconType from './IconType'
import { RoundedRectContainer, Label } from './styles'
import { LabelButtonProps } from './types'

const LabelButton: React.FC<LabelButtonProps> = ({
  onPress,
  label,
  icon,
  color,
  backgroundColor,
  size,
  absolute,
}) => {
  const iconType = icon === 'whatsapp' ? 'FontAwesome' : 'Feather'
  return (
    <RoundedRectContainer
      absolute={absolute}
      onPress={onPress}
      style={{
        backgroundColor,
        height: size,
        borderRadius: size / 2.8,
        elevation: 3,
      }}
    >
      {icon && (
        <IconType
          name={icon}
          size={size / 2}
          color={color}
          iconType={iconType}
        />
      )}
      <Label style={{ color, fontSize: size / 3 }}>{label}</Label>
    </RoundedRectContainer>
  )
}

export default LabelButton
