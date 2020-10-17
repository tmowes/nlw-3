import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  padding: 20px;
  width: 48%;
  border-radius: 20px;
  border-width: 1px;
`

export const Icon = styled(Feather)``

export const Label = styled.Text`
  font-family: nunito600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`
