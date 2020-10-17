import React from 'react'
import LabelButton from '../../components/LabelButton'
import ScheduleItem from './ScheduleItem'

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

const OrphanagesDetails: React.FC = () => {
  return (
    <ScrollContainer>
      <ImagesContainer>
        <ScrollImages>
          <Image
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Image
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Image
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
        </ScrollImages>
      </ImagesContainer>
      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Description>
        <MapWrapper>
          <MapContainer
            initialRegion={{
              latitude: -26.8411135,
              longitude: -49.2537338,
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
                latitude: -26.8411135,
                longitude: -49.2537338,
              }}
            />
          </MapContainer>
          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapWrapper>
        <Separator />
        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>
        <ScheduleContainer>
          <ScheduleItem
            label="Segunda à Sexta 8h às 18h"
            icon="clock"
            color="#2AB5D1"
            size={40}
            backgroundColor="#E6F7FB"
            borderColor="#B3DAE2"
            labelColor="#5C8599"
          />
          <ScheduleItem
            label="Atendemos fim de semana"
            icon="info"
            color="#39CC83"
            size={40}
            backgroundColor="#EDFFF6"
            borderColor="#A1E9C5"
            labelColor="#37C77F"
          />
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
