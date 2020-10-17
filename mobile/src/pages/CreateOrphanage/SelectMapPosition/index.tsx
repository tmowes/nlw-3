import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { MapEvent } from 'react-native-maps'
import LabelButton from '../../../components/LabelButton'

import { Container, MapContainer, MapMarker } from './styles'

const SelectMapPosition: React.FC = () => {
  const { navigate } = useNavigation()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const handleNavigationOrphanageData = useCallback(() => {
    navigate('OrphanageData', { position })
  }, [navigate, position])

  const handleSelectMapPosition = useCallback((event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate)
  }, [])

  return (
    <Container>
      <MapContainer
        initialRegion={{
          latitude: -26.8411135,
          longitude: -49.2537338,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <MapMarker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapContainer>
      {position.latitude !== 0 && (
        <LabelButton
          onPress={handleNavigationOrphanageData}
          label="Próximo"
          size={56}
          color="#ffffff"
          backgroundColor="#15c3d6"
          absolute
        />
      )}
    </Container>
  )
}

export default SelectMapPosition
