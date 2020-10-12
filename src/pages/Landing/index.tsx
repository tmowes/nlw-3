import React from 'react'

import {
  Container,
  ContentWrapper,
  Logo,
  Main,
  Title,
  SubTitle,
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
          <Title>Leve felicidade para o mundo</Title>
          <SubTitle>Visite orfanatos e mude o dia de muitas crianças.</SubTitle>
        </Main>
        <Location>
          <City>Timbó</City>
          <State>Santa Catarina</State>
        </Location>
        <EnterApp>
          <EnterAppIcon />
        </EnterApp>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
