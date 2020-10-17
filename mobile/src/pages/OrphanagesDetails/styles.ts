import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMarker from '../../assets/map-marker.png'

const { width: wWidth } = Dimensions.get('screen')

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`

export const ImagesContainer = styled.View`
  height: 240px;
`

export const ScrollImages = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
})``

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${wWidth}px;
  height: 240px;
`
export const DetailsContainer = styled.View`
  padding: 24px;
`

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: nunito700;
`

export const Description = styled.Text`
  color: #5c8599;
  font-family: nunito600;
  line-height: 24px;
  margin-top: 16px;
`

export const MapWrapper = styled.View`
  background-color: #e6f7fb;
  border-radius: 20px;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  overflow: hidden;
`

export const MapContainer = styled(MapView).attrs({
  provider: PROVIDER_GOOGLE,
})`
  height: 150px;
  width: 100%;
`

export const MapMarker = styled(Marker).attrs({
  icon: mapMarker,
})``

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  justify-content: center;
  align-items: center;
`

export const RoutesText = styled.Text`
  color: #0089a5;
  font-family: nunito700;
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #d3e2e6;
  margin: 40px 0;
`

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`
