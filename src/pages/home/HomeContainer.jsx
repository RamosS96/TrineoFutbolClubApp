import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore, orderBy, query,limit } from 'firebase/firestore';
import { useState } from 'react';
import NewsBadge from '../../components/NewsBadge/NewsBadge';
import ResultsBar from '../../components/ResultsBar/ResultsBar';
import './HomeContainer.css';

// ------> Obtencion de datos desde firebase // GET to Firebase
const getNews = () => {
  const db = getFirestore();
  const newsCollection = collection(db, 'news');

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
  console.log(results)
  return (
    <div className='container home-container'>
      <div className='row news-ba'>
        <div className='col-md-10 offset-md-1 d-flex flex-row justify-content-between'>
        {results.map(d => <ResultsBar props={{...d, dateStamp : getDateStamp(d.date)}} key={d.date}/>)}
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 offset-md-1 d-flex flex-row justify-content-center col-md-10'>
          <h1>TRINEO FUTBOL CLUB</h1>
        </div>
        <div className='col-md-12 d-flex flex-row justify-content-center aside-menu'>
          
            {/* Sponsors */}
            <img className="spo-logo d-inline" alt='sponsor1' src='https://logospng.org/download/riot-games/riot-games-256.png'/>
            <img className="spo-logo d-inline" alt='sponsor2' src='https://baglietto.com.ar/wp-content/uploads/2021/03/atomo-desinflamante-01.png'/>
            <img className="spo-logo d-inline" alt='sponsor3' src='https://cdn-icons-png.flaticon.com/512/731/731962.png'/>
          
        </div>
        <div className='col-md-9 justify-content-center'>
          <div>
            <h2>Noticias</h2>
          </div>
          <div>
            {news.map(d => <NewsBadge props={{...d, date : getDateStamp(d.date)}} key={d.id} />)}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;