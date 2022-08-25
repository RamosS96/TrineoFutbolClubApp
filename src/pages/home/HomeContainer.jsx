import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import NewsBadge from '../../components/NewsBadge/NewsBadge';
import ResultsBar from '../../components/ResultsBar/ResultsBar';

const getNews = () => {
  const db = getFirestore();
  const newsCollection = collection(db, 'news');

  return getDocs(newsCollection);
}
const getResults = () => {
  const db = getFirestore();
  const resultsCollection = collection(db, 'results');

  return getDocs(resultsCollection);
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
    <div className='container'>
      <div className='row'>
        {results.map(d => <ResultsBar props={d} key={d.date}/>)}
      </div>
      <div className='row'>
        <div className='col-md-3 d-sm-none'>
          <aside>
            <p>Aside Menu</p>
          </aside>
        </div>
        <div className='col-sm-12 col-md-9'>
          <h1>TRINEO FUTBOL CLUB</h1>
        </div>
        <div className='col-md-9 justify-content-center'>
          <div>
            <h2>Noticias</h2>
          </div>
          <div>
            {news.map(d => <NewsBadge props={d} key={d.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;