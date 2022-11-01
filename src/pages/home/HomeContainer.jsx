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
        <SponsorL alt='sponsor1' link="https://logospng.org/download/riot-games/riot-games-256.png" />
        <SponsorL alt='sponsor2' link='https://baglietto.com.ar/wp-content/uploads/2021/03/atomo-desinflamante-01.png' />
        <SponsorL alt='sponsor3' link='https://cdn-icons-png.flaticon.com/512/731/731962.png' />
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