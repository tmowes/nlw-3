/* eslint-disable no-alert */
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  launchImageLibraryAsync,
  requestCameraRollPermissionsAsync,
  MediaTypeOptions,
} from 'expo-image-picker'
import React, { useCallback, useState } from 'react'
import { Switch } from 'react-native'

import LabelButton from '../../../components/LabelButton'
import api from '../../../services/api'

import {
  ScrollContainer,
  Title,
  Label,
  Input,
  ImagesInput,
  UploadImagesContainer,
  UploadImage,
  SwitchContainer,
} from './styles'
import { OrphanageDataRouteParams } from './types'

const OrphanageData: React.FC = () => {
  const { params } = useRoute()
  const { position } = params as OrphanageDataRouteParams
  const { navigate } = useNavigation()

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(false)
  const [images, setImages] = useState<string[]>([])

  const handleSelectImages = useCallback(async () => {
    const { status } = await requestCameraRollPermissionsAsync()
    if (status !== 'granted') {
      alert('Precisamos de acesso a galeria de fotos')
    }
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: MediaTypeOptions.Images,
    })
    if (result.cancelled) {
      return
    }
    const { uri: image } = result
    setImages([...images, image])
  }, [images])

  const handleCreateOrphanage = useCallback(async () => {
    const { latitude, longitude } = position
    const data = new FormData()
    data.append('name', name)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })
    await api.post('orphanages', data)
    navigate('OrphanagesMap')
  }, [
    about,
    images,
    instructions,
    name,
    navigate,
    open_on_weekends,
    opening_hours,
    position,
  ])

  return (
    <ScrollContainer>
      <Title>Dados</Title>
      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} />
      <Label>Sobre</Label>
      <Input
        value={about}
        onChangeText={setAbout}
        style={{ height: 110, textAlignVertical: 'top' }}
        multiline
      />
      {/* <Label>Whatsapp</Label>
      <Input value={name} onChangeText={setName} */}
      <Label>Fotos</Label>
      <UploadImagesContainer>
        {images.map(image => (
          <UploadImage key={image} source={{ uri: image }} />
        ))}
      </UploadImagesContainer>
      <ImagesInput onPress={handleSelectImages} />
      <Title>Visitação</Title>
      <Label>Instruções</Label>
      <Input
        value={instructions}
        onChangeText={setInstructions}
        style={{ height: 110, textAlignVertical: 'top' }}
        multiline
      />
      <Label>Horario de visitas</Label>
      <Input value={opening_hours} onChangeText={setOpeningHours} />
      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>
      <LabelButton
        onPress={handleCreateOrphanage}
        label="Cadastrar"
        size={56}
        color="#ffffff"
        backgroundColor="#15c3d6"
      />
    </ScrollContainer>
  )
}

export default OrphanageData
