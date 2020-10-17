export interface LabelButtonProps {
  icon?: string
  label: string
  size: number
  color: string
  backgroundColor: string
  onPress: () => void
  absolute?: boolean
}

export interface ContainerProps {
  absolute?: boolean
}
