import React, { useCallback, useEffect, useState } from 'react'
import { Linking } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { LabelButton } from '../../components'
import ScheduleItem from './ScheduleItem'
import api from '../../services/api'

import {
  ScrollContainer,
  ImagesContainer,
  ScrollImages,
  Image,
  DetailsContainer,
  Title,
  Description,
  MapWrapper,
  MapContainer,
  MapMarker,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
} from './styles'
import { OrphanageProps } from '../OrphanagesMap/types'
import { OrphanagesDetailsRouteParams } from './types'

const OrphanagesDetails: React.FC = () => {
  const { params } = useRoute()
  const [orphanage, setOrphanage] = useState<OrphanageProps>()

  const { id } = params as OrphanagesDetailsRouteParams

  useEffect(() => {
    const loadOrphanageById = async () => {
      const { data } = await api.get(`orphanages/${id}`)
      setOrphanage(data)
    }
    loadOrphanageById()
  }, [id])

  const handleOpenGoogleMapRoutes = useCallback(() => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`,
    )
  }, [orphanage?.latitude, orphanage?.longitude])

  if (!orphanage) {
    return (
      <ScrollContainer>
        <Title>Carregando...</Title>
      </ScrollContainer>
    )
  }

  return (
    <ScrollContainer>
      <ImagesContainer>
        <ScrollImages>
          {orphanage.images.map(({ id, url }) => (
            <Image key={id} source={{ uri: url }} />
          ))}
        </ScrollImages>
      </ImagesContainer>
      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>
        <MapWrapper>
          <MapContainer
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <MapMarker
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapContainer>
          <RoutesContainer onPress={handleOpenGoogleMapRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapWrapper>
        <Separator />
        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>
        <ScheduleContainer>
          <ScheduleItem
            label={`Segunda à Sexta ${orphanage.opening_hours}`}
            icon="clock"
            color="#2AB5D1"
            size={40}
            backgroundColor="#E6F7FB"
            borderColor="#B3DAE2"
            labelColor="#5C8599"
          />
          {orphanage.open_on_weekends ? (
            <ScheduleItem
              label="Atendemos fim de semana"
              icon="info"
              color="#39CC83"
              size={40}
              backgroundColor="#EDFFF6"
              borderColor="#A1E9C5"
              labelColor="#37C77F"
            />
          ) : (
            <ScheduleItem
              label="Não atendemos fim de semana"
              icon="info"
              color="#FF669D"
              size={40}
              backgroundColor="#FEF5F8"
              borderColor="#FFBCD4"
              labelColor="#FF669D"
            />
          )}
        </ScheduleContainer>
        <LabelButton
          onPress={() => true}
          label="Entrar em contato"
          size={56}
          backgroundColor="#3CDC8C"
          color="#FFFFFF"
          icon="whatsapp"
        />
      </DetailsContainer>
    </ScrollContainer>
  )
}

export default OrphanagesDetails
