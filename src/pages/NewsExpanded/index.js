import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getNewsComplete } from '../../utils/fn';
import { Container } from '../../components/Container';
import NewsDetail from '../../components/NewsDetail'
import { getDateStamp } from '../../utils/fn';

function NewsExpanded() {
  const [notice, setNotice] = useState([]);
  const { idParamNew } = useParams();

  useEffect(()=>{
    getNewsComplete()
    .then(snapshot => {
      setNotice(snapshot.docs.map(doc => {
        return doc.data()
      }))
    })
  },[])
  return (
    <Container>
      
      {notice.filter(el => el.date == idParamNew).map(el => <NewsDetail key={el.date} props={{...el, date: getDateStamp(el.date)}}/> )}
    
    </Container>
  );
}

export default NewsExpanded;