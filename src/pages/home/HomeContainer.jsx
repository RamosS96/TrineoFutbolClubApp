import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
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
  const resultsCollection = query(collection(db, "results"), orderBy("date","desc"));

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
      <div className='row'>
        {results.map(d => <ResultsBar props={{...d, dateStamp : getDateStamp(d.date)}} key={d.date}/>)}
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-10'>
          <h1>TRINEO FUTBOL CLUB</h1>
        </div>
        <div className='col-md-2 aside-menu'>
          <aside>
            <p>Aside Menu</p>
          </aside>
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