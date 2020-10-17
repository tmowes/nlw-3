import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { HeaderContainer, HeaderLabel, Empty } from './styles'
import { HeaderProps } from './types'
import HeaderButton from './HeaderButton'

const Header: React.FC<HeaderProps> = ({ label, leftIcon, rightIcon }) => {
  const { goBack, navigate } = useNavigation()

  const handleNavigationToHome = useCallback(() => {
    navigate('OrphanagesMap')
  }, [navigate])

  return (
    <HeaderContainer>
      {leftIcon && (
        <HeaderButton icon={leftIcon} onPress={goBack} color="#15b6d6" />
      )}
      <HeaderLabel>{label}</HeaderLabel>
      {rightIcon ? (
        <HeaderButton
          icon={rightIcon}
          onPress={handleNavigationToHome}
          color="#ff669d"
        />
      ) : (
        <Empty />
      )}
    </HeaderContainer>
  )
}

export default Header
