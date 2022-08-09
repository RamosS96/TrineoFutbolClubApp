import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const getNews = () => {
  const db = getFirestore();
  const newsCollection = collection(db, 'news');

  return getDocs(newsCollection);
}

function HomeContainer(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then(snapshot => {
        setNews(snapshot.docs.map(doc => {
          return doc.data();
        }))
      })
  }, []);


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
      </div>
    </div>
  );
}

export default HomeContainer;