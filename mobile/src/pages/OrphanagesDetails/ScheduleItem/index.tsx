import React from 'react'

import { Container, Icon, Label } from './styles'
import { ScheduleItemProps } from './types'

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  label,
  icon,
  color,
  size,
  backgroundColor,
  borderColor,
  labelColor,
}) => {
  return (
    <Container style={{ backgroundColor, borderColor }}>
      <Icon name={icon} size={size / 1.6} color={color} />
      <Label style={{ color: labelColor }}>{label}</Label>
    </Container>
  )
}

export default ScheduleItem
