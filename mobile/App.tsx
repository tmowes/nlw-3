import React from 'react'
import { useFonts } from 'expo-font'
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'

import AppSrc from './src'

const App: React.FC = () => {
  const [fontloaded] = useFonts({
    nunito600: Nunito_600SemiBold,
    nunito700: Nunito_700Bold,
    nunito800: Nunito_800ExtraBold,
  })

  if (!fontloaded) {
    return null
  }

  return (
    <>
      <AppSrc />
    </>
  )
}

export default App
