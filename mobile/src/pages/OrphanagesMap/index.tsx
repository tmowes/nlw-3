/* eslint-disable no-alert */
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

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

const OrphanagesMap: React.FC = () => {
  const { navigate } = useNavigation()
  const handleNavigationToOrphanagesDetails = useCallback(() => {
    navigate('OrphanagesDetails')
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
        >
          <CalloutWrapper onPress={() => handleNavigationToOrphanagesDetails()}>
            <CalloutContainer>
              <CalloutText>Dev Julius</CalloutText>
            </CalloutContainer>
          </CalloutWrapper>
        </MapMarker>
      </MapContainer>
      <Footer style={{ elevation: 3 }}>
        <FooterText>1 orfanato encontrado</FooterText>
        <RoundedSquareButton
          onPress={() => true}
          name="plus"
          size={56}
          color="#ffffff"
          backgroundColor="#15c3d6"
        />
      </Footer>
    </Container>
  )
}

export default OrphanagesMap
