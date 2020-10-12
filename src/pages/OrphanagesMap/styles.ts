import styled, { css } from 'styled-components'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../../assets/map-marker.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 440px;
    padding: 80px;
    background: linear-gradient(
      329.54deg,
      ${theme.colors.primaryDark} 0%,
      ${theme.colors.primary} 100%
    );
  `}
`

export const Header = styled.div``

export const MapMarker = styled.img.attrs({
  src: mapMarkerImg,
})``

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;
`

export const City = styled.strong`
  font-weight: 800;
`

export const State = styled.div``

export const AddOrphanage = styled(Link)`
  ${({ theme }) => css`
    position: absolute;
    right: 40px;
    bottom: 40px;
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background: ${theme.colors.buttonSky};
    transition: background-color 0.2s;
    &:hover {
      background: ${theme.colors.buttonSkyHover};
    }
  `}
`

export const AddOrphanageIcon = styled(FiPlus).attrs({
  size: 32,
})`
  color: white;
`
