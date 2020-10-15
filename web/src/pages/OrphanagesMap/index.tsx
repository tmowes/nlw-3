import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import {
  Container,
  Aside,
  Header,
  MapMarker,
  Title,
  Description,
  Footer,
  City,
  State,
  AddOrphanage,
  AddOrphanageIcon,
} from './styles'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <MapMarker />
          <Title>Escolha um orfanato no mapa</Title>
          <Description>
            Muitas crianças estão esperando a sua visita :)
          </Description>
        </Header>
        <Footer>
          <City>Timbó</City>
          <State>Santa Catarina</State>
        </Footer>
      </Aside>
      <Map
        center={[-26.8413137, -49.2628124]}
        zoom={20}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <AddOrphanage to="/">
        <AddOrphanageIcon />
      </AddOrphanage>
    </Container>
  )
}

export default OrphanagesMap
