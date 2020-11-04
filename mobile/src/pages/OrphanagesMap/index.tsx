import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import RoundedSquareButton from '../../components/RoundedSquareButton'

import {
  CalloutContainer,
  CalloutText,
  CalloutWrapper,
  Container,
  Footer,
  FooterText,
  MapContainer,
  MapMarker,
} from './styles'
import api from '../../services/api'
import { OrphanageProps } from './types'

const OrphanagesMap: React.FC = () => {
  const { navigate } = useNavigation()
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([])

  useFocusEffect(
    useCallback(() => {
      let loadingData = true
      const loadOrphanages = async () => {
        const { data } = await api.get('orphanages')
        if (loadingData) {
          setOrphanages(data)
        }
      }
      loadOrphanages()
      return () => {
        loadingData = false
      }
    }, []),
  )

  const handleNavigationToOrphanagesDetails = useCallback(
    (id: number) => {
      navigate('OrphanagesDetails', { id })
    },
    [navigate],
  )

  const handleNavigationToCreateOrphanage = useCallback(() => {
    navigate('SelectMapPosition')
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
        {orphanages.map(orphanage => (
          <MapMarker
            key={orphanage.id}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <CalloutWrapper
              onPress={() => handleNavigationToOrphanagesDetails(orphanage.id)}
            >
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </CalloutWrapper>
          </MapMarker>
        ))}
      </MapContainer>
      <Footer style={{ elevation: 3 }}>
        <FooterText>{`${orphanages.length} orfanato encontrado`}</FooterText>
        <RoundedSquareButton
          onPress={handleNavigationToCreateOrphanage}
          icon="plus"
          size={56}
          color="#ffffff"
          backgroundColor="#15c3d6"
        />
      </Footer>
    </Container>
  )
}

export default OrphanagesMap
