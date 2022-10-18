import React, { useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import './MatchesContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/StatsTable'

function getMatches() {
  const db = getFirestore()
  const matchesCollection = collection(db, 'matches');

  return getDocs(matchesCollection)
}

function MatchesContainer() {
  const [match, setMatch] = useState([])
  const { idParamMatch } = useParams();



  useEffect(() => {
    getMatches()
      .then(snapshot => {
        setMatch(snapshot.docs.map(doc => {
          return doc.data()
        }));

      });
  }, []);


  return (
    <div className='container matches-container'>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <h3>Partido contra {match.filter(mat => mat.date == idParamMatch).map(d => <p>{d.rival}</p>)}</h3>
        </div>
      </div>

      <div className='col-md-6 col-sm-12'>
        {match.filter(mat => mat.date == idParamMatch).map(d => <StatsTable props={d} />)}

      </div>

      <div className='col-md-6 col-sm-12 matchescontainer-img-c'>
        {match.filter(mat => mat.date == idParamMatch).map(d => <img className='matchescontainer-img' alt="" src={d.img} />)}
      </div>

    </div>
  );
}

export default MatchesContainer;