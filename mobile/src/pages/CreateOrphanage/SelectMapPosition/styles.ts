import { Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'

import mapMarker from '../../../assets/map-marker.png'

const { width: wWidth, height: hHeight } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  position: relative;
`
export const MapContainer = styled(MapView).attrs({
  provider: PROVIDER_GOOGLE,
})`
  width: ${wWidth}px;
  height: ${hHeight}px;
`
export const MapMarker = styled(Marker).attrs({
  icon: mapMarker,
})``
