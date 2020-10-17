import { Dimensions } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'

import mapMarker from '../../assets/map-marker.png'

const { width: wWidth, height: hHeight } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
export const MapContainer = styled(MapView).attrs({
  provider: PROVIDER_GOOGLE,
})`
  width: ${wWidth}px;
  height: ${hHeight}px;
`
export const MapMarker = styled(Marker).attrs({
  icon: mapMarker,
  calloutAnchor: {
    x: 2.7,
    y: 0.8,
  },
})``

export const CalloutWrapper = styled(Callout).attrs({
  tooltip: true,
})``

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 0 16px;
  border-radius: 16px;
  justify-content: center;
  background-color: #fff;
`

export const CalloutText = styled.Text`
  color: #0089a5;
  font-size: 14px;
  font-family: nunito700;
`
export const Footer = styled.View`
  flex-direction: row;
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;
  background-color: #fff;
  height: 56px;
  padding-left: 24px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
`

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-family: nunito700;
`
