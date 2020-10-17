import React from 'react'
import { Switch } from 'react-native'

import LabelButton from '../../../components/LabelButton'

import {
  ScrollContainer,
  Title,
  Label,
  Input,
  ImagesInput,
  SwitchContainer,
} from './styles'

const OrphanageData: React.FC = () => {
  return (
    <ScrollContainer>
      <Title>Dados</Title>
      <Label>Nome</Label>
      <Input />
      <Label>Sobre</Label>
      <Input style={{ height: 110, textAlignVertical: 'top' }} multiline />
      <Label>Whatsapp</Label>
      <Input />
      <Label>Fotos</Label>
      <ImagesInput />
      <Title>Visitação</Title>
      <Label>Instruções</Label>
      <Input style={{ height: 110, textAlignVertical: 'top' }} multiline />
      <Label>Horario de visitas</Label>
      <Input />
      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>
      <LabelButton
        onPress={() => true}
        label="Cadastrar"
        size={56}
        color="#ffffff"
        backgroundColor="#15c3d6"
      />
    </ScrollContainer>
  )
}

export default OrphanageData
