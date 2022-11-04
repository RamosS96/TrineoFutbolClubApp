import React, { useEffect } from 'react';
import { useState } from 'react';
import ResultsBar from '../../components/ResultsBar';
import NewsMain from '../../components/NewsMain';
import SponsorL from '../../components/Sponsor';
import NewsCard from '../../components/NewsCard';
import { Wrapper, WrapperLG } from '../../components/Wrapper/styled';
import { Title1, Title2 } from '../../components/Title/';
import { Container } from '../../components/Container';
import { getNews, getResults, getDateStamp, getResume } from '../../utils/fn';


function HomeContainer() {
  const [news, setNews] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getNews()
      .then(snapshot => {
        setNews(snapshot.docs.map(doc => {
          return doc.data()
        }));

      });
    getResults()
      .then(snapshot => {
        setResults(snapshot.docs.map(doc => {
          return doc.data()
        }));

      })
  }, []);
  return (
    <Container>
        <WrapperLG>
          {results.map(d => <ResultsBar props={{ ...d, dateStamp: getDateStamp(d.date) }} key={d.date} />)}
          </WrapperLG>
      <Title1>TRINEO FUTBOL CLUB</Title1>
      <Wrapper>
        {/* Sponsors */}
        <SponsorL alt='sponsor1' link="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" />
        <SponsorL alt='sponsor2' link='https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Bayer.svg.png?alt=media&token=d08e8d96-a07c-4466-ae67-9ff66bd399da' />
        <SponsorL alt='sponsor3' link='https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Adidas.png?alt=media&token=08f848a3-90c1-4510-afd9-40d4e6dd286f' />
      </Wrapper>
      <Title2>Noticias</Title2>
      <Wrapper>
      {news.slice(0, 1).map(d => <NewsMain props={{ ...d, content: getResume([...d.content]), datestamp: getDateStamp(d.date) }} key={d.date} />)}
      {news.slice(1, 4).map(d => <NewsCard props={{ ...d, content: getResume([...d.content]), datestamp: getDateStamp(d.date) }} key={d.date} />)}
      </Wrapper>
    </Container>
  );
}

export default HomeContainer;