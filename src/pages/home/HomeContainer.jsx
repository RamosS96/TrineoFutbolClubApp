import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import NewsBadge from '../../components/NewsBadge/NewsBadge';

const getNews = () => {
  const db = getFirestore();
  const newsCollection = collection(db, 'news');

  return getDocs(newsCollection);
}

function HomeContainer() {
  const [news, setNews] = useState([]);

  useEffect(() => { 
    getNews()
      .then(snapshot => { 
        setNews(snapshot.docs.map(doc => {
          console.log(doc.data())
          return doc.data()
        }));
        console.log(news)
      })
  }, []);

console.log(news);
  return (
    <div className='container'>
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
            {news.map(d =>  <NewsBadge props={d} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;