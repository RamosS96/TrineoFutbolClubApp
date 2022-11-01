import React, { useEffect, useState } from 'react';
import { Wrapper, Title, MainTitle } from './styled';
import {getNews, getResume} from '../../utils/fn';
import { Container } from '../../components/Container';
import NewsCard from '../../components/NewsCard';

function NewsContainer() {
  const [news, setNews] = useState([]);

  useEffect(()=> {
    getNews()
    .then(snapshot => {
      setNews(snapshot.docs.map(doc => {
        return doc.data()
      }));

    });
  },[])
   

  return (
    <Container>
      <MainTitle>Todas las noticias</MainTitle>
      <Title>Partidos</Title>
      {news.filter(el => el.rel === "matches").map(n => <NewsCard key={n.date} props={{...n, content: getResume([...n.content])}}/>)}
      <Title>Plantel</Title>
      <Title>Social</Title>
    </Container>
  );
}

export default NewsContainer;