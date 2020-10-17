import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import LabelButton from '../../../components/LabelButton'

import { Container, MapContainer, MapMarker } from './styles'

const SelectMapPosition: React.FC = () => {
  const { navigate } = useNavigation()

  const handleNavigationOrphanageData = useCallback(() => {
    navigate('OrphanageData')
  }, [navigate])

  return (
    <Container>
      <MapContainer
        initialRegion={{
          latitude: -26.8411135,
          longitude: -49.2537338,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <MapMarker
          coordinate={{
            latitude: -26.8411135,
            longitude: -49.2537338,
          }}
        />
      </MapContainer>
      <LabelButton
        onPress={handleNavigationOrphanageData}
        label="Próximo"
        size={56}
        color="#ffffff"
        backgroundColor="#15c3d6"
        absolute
      />
    </Container>
  )
}

export default SelectMapPosition
