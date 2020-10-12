import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(329.54deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%);`};
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`

export const Logo = styled.img.attrs({
  src: logoImg,
})``

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: -64px;
`
export const LeftSide = styled.div`
  max-width: 350px;
`
export const LandingImage = styled.img.attrs({
  src: landingImg,
})`
  margin-left: 64px;
`

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`
export const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`
export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 34px;
  text-align: right;
`
export const City = styled.strong`
  font-weight: 800;
`
export const State = styled.p``

export const EnterApp = styled(Link)`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80px;
    height: 80px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.buttonLight};
    transition: background-color 0.2s;
    &:hover {
      background: ${theme.colors.buttonHover};
    }
  `}
`
export const EnterAppIcon = styled(FiArrowRight).attrs({
  size: 36,
})`
  color: white;
`
