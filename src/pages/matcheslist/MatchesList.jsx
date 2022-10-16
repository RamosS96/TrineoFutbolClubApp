import React, {useEffect, useState} from 'react';
import './MatchesList.css';
import { collection, getDocs, getFirestore} from 'firebase/firestore';

function getMatches(){
    const db = getFirestore()
    const matchesCollection = collection(db,'matches');
  
    return getDocs(matchesCollection)
  }

function MatchesList() {
    const [match, setMatch] = useState([]);

    useEffect(()=>{
        getMatches()
        .then(snapshot => {
          setMatch(snapshot.docs.map(doc => {
            return doc.data()
          }));
    
        });
        },[]);

    return (
        <div className='matcheslist-container'>
            <h2>TODOS LOS PARTIDOS</h2>
            {match.map(d => <a href={`./matches/${d.date}`}><span>{d.rival} </span><span>({d.GF + " -" + d.GC})</span></a>)}
        </div>
    );
}

export default MatchesList;