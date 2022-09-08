import React, { useState } from 'react';
import { collection, getDocs, getFirestore, where, query} from 'firebase/firestore';
import './MatchesContainer.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/StatsTable';


function MatchesContainer() {
  const [match, setMatch] = useState([])
  const {idParamMatch} = useParams();
  
  

  useEffect(()=>{
    const getMatchs = () => {
      const db = getFirestore();
      const matchCollection = query(collection(db, 'matches'), where("date","==",1661115600));
    
      return getDocs(matchCollection);
    };

     getMatchs()
     .then(snapshot => {
      setMatch(snapshot.docs.map(doc => {
        return doc.data()
        
      }))
     });
     
    },[]);


    console.log(idParamMatch)
    console.log(match)
  return (
    <div className='container matches-container'>
      <div className='row'>
        
      </div>
      <div className='row'>
        
       
      </div>
      <div className='row'>
       
        {match.map(d=> <StatsTable props={d}/>)}
      </div>
    </div>
  );
}

export default MatchesContainer;