import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore, orderBy, query,limit } from 'firebase/firestore';
import { useState } from 'react';
import ResultsBar from '../../components/ResultsBar/ResultsBar';
import './HomeContainer.css';
import NewsMain from '../../components/NewsMain';
import SponsorL from '../../components/Sponsor';
import NewsCard from '../../components/NewsCard';

// ------> Obtencion de datos desde firebase // GET to Firebase
const getNews = () => {
  const db = getFirestore();
  const newsCollection = query(collection(db, "news"), orderBy("date","desc"), limit(5));

  return getDocs(newsCollection);
}
const getResults = () => {
  const db = getFirestore();
  const resultsCollection = query(collection(db, "results"), orderBy("date","desc"), limit(5));

  return getDocs(resultsCollection);
}
// -------> Conversor de fechas // Timestamp Conversor
const getDateStamp = (mili) =>{
  const miliseconds = mili * 1000;
  const dateObj = new Date(miliseconds);
  return dateObj.toLocaleString()
}

const getResume = (cont) => {
  if (cont.length > 85) {
    const newCont = cont.splice(0, 80)
    newCont.push("(...)")
    return newCont
  } else {
    return cont
  }
} 

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
    <div className='container home-container'>
      <div className='row news-bar'>
        <div className='col-md-10 offset-md-1 d-flex flex-row justify-content-between'>
        {results.map(d => <ResultsBar props={{...d, dateStamp : getDateStamp(d.date)}} key={d.date}/>)}
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 offset-md-1 d-flex flex-row justify-content-center col-md-10'>
          <h1>TRINEO FUTBOL CLUB</h1>
        </div>
        <div className='col-md-12 col-sm-12 d-flex flex-row justify-content-center aside-menu'>
          
            {/* Sponsors */}
            <SponsorL alt='sponsor1' link="https://logospng.org/download/riot-games/riot-games-256.png"/>
            <SponsorL alt='sponsor2' link='https://baglietto.com.ar/wp-content/uploads/2021/03/atomo-desinflamante-01.png'/>
            <SponsorL alt='sponsor3' link='https://cdn-icons-png.flaticon.com/512/731/731962.png'/>
          
        </div>

            <h2>Noticias</h2>

            {news.slice(0,1).map(d => <NewsMain props={{...d,content: getResume([...d.content]), datestamp : getDateStamp(d.date)}} key={d.date} />)}

            {news.slice(1,4).map(d => <NewsCard props={{...d, content: getResume([...d.content]), datestamp : getDateStamp(d.date)}} key={d.date}/>)}

      </div>
    </div>
  );
}

export default HomeContainer;