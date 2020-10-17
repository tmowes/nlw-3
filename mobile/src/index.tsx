import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Routes from './routes'

const AppSrc: React.FC = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Routes />
    </View>
  </NavigationContainer>
)

export default AppSrc
