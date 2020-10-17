import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from '../pages/OrphanagesMap'
import OrphanagesDetails from '../pages/OrphanagesDetails'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanagesDetails" component={OrphanagesDetails} />
    </Navigator>
  </>
)

export default AppRoutes
