import React from 'react'

import {
  Container,
  ContentWrapper,
  Logo,
  Main,
  LeftSide,
  Title,
  SubTitle,
  LandingImage,
  Location,
  City,
  State,
  EnterApp,
  EnterAppIcon,
} from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo />
        <Main>
          <LeftSide>
            <Title>Leve felicidade para o mundo</Title>
            <SubTitle>
              Visite orfanatos e mude o dia de muitas crianças.
            </SubTitle>
          </LeftSide>
          <LandingImage />
        </Main>
        <Location>
          <City>Timbó</City>
          <State>Santa Catarina</State>
        </Location>
        <EnterApp to="/app">
          <EnterAppIcon />
        </EnterApp>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
