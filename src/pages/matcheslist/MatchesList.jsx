import React, {useEffect, useState} from 'react';
import './MatchesList.css';
import { collection, getDocs, getFirestore,query,orderBy} from 'firebase/firestore';
import MatchBar from '../../components/matchBar';
import { Wrapper } from '../../components/Wrapper/styled';

function getMatches(){
    const db = getFirestore()
    const matchesCollection = query(collection(db, "matches"), orderBy("date","desc"));
  
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
        <div className='matcheslist-container container'>
            <h2>TODOS LOS PARTIDOS</h2>
            <Wrapper>
            {match.map(d => <MatchBar link={d.date} props={`${d.rival} - ${d.GF} - ${d.GC}`}></MatchBar>)}            
            </Wrapper>
        </div>
    );
}

export default MatchesList;