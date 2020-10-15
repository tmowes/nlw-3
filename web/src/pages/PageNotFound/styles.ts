import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(
      329.54deg,
      ${theme.colors.primaryDark} 0%,
      ${theme.colors.primary} 100%
    );
  `}
`
