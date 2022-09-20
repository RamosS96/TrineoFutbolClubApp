import React, { useContext, useState } from 'react';
import './MatchesContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/StatsTable';
import { matchesContext } from '../../contexts/matchesContext';

function MatchesContainer() {
  const [match, setMatch] = useState([])
  const {idParamMatch} = useParams();
  const matchCtx = useContext(matchesContext);
  
  
  useEffect(()=>{
    setMatch(matchCtx.matchesList)
    
    console.log(idParamMatch)
    console.log(match)
     
    },[]);


  return (
    <div className='container matches-container'>
      <div className='row'>
        
      </div>
      <div className='row'>
        
       
      </div>
      <div className='row'>
       
        {matchCtx.matchesList.filter(match=> match.date == idParamMatch).map(d=> <StatsTable key={d.date} props={d}/>)}
      </div>
    </div>
  );
}

export default MatchesContainer;