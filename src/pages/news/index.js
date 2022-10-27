import React from 'react';
import { Wrapper, Title, MainTitle } from './styled';

function NewsContainer() {
  return (
    <Wrapper>
      <MainTitle>Todas las noticias</MainTitle>
      <Title>Partidos</Title>
      <Title>Plantel</Title>
      <Title>Social</Title>
    </Wrapper>
  );
}

export default NewsContainer;