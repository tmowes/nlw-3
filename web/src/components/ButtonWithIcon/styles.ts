import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export const Container = styled(Link)``

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
