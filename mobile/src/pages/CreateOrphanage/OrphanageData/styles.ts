import styled from 'styled-components/native'

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 24 },
})`
  flex: 1;
  position: relative;
`
export const Title = styled.Text`
  font-family: nunito700;
  color: #5c8599;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`

export const Label = styled.Text`
  font-family: nunito600;
  color: #8fa7b3;
  margin-bottom: 8px;
`

export const Input = styled.TextInput`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  padding: 18px 24px;
  height: 56px;
  /* text-align-vertical: top; */
`

export const ImagesInput = styled.TouchableOpacity`
  background-color: #fff;
  border-style: dashed;
  border-width: 1.4px;
  border-color: #96d2f0;
  border-radius: 20px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`
