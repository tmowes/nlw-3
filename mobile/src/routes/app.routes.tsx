import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Header from '../components/Header'

import OrphanagesMap from '../pages/OrphanagesMap'
import OrphanagesDetails from '../pages/OrphanagesDetails'

import SelectMapPosition from '../pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from '../pages/CreateOrphanage/OrphanageData'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen
        name="OrphanagesDetails"
        component={OrphanagesDetails}
        options={{
          headerShown: true,
          header: () => <Header label="Orfanato" leftIcon="arrow-left" />,
        }}
      />
      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          headerShown: true,
          header: () => (
            <Header
              label="Selecione a localização no mapa"
              leftIcon="arrow-left"
              rightIcon="x"
            />
          ),
        }}
      />
      <Screen
        name="OrphanageData"
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => (
            <Header
              label="Informe os dados do orfanato"
              leftIcon="arrow-left"
              rightIcon="x"
            />
          ),
        }}
      />
    </Navigator>
  </>
)

export default AppRoutes
