import React, { useContext, useState } from 'react';
import './MatchesContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/StatsTable';
import { MatchContext } from '../../contexts/matchesContext';

function MatchesContainer() {
  const [match, setMatch] = useState([])
  const {idParamMatch} = useParams();
  const matchCtx = useContext(MatchContext);
  
  
  useEffect(()=>{
    setMatch(matchCtx.matchesList)
    console.log(match)
    },[]);

    
  return (
    <div className='container matches-container'>
      <div className='row'>
        
      </div>
      <div className='row'>
        
       
      </div>
      <div className='row'>
       
        {matchCtx.matchesList.filter(mat => mat.date == idParamMatch).map(d => <StatsTable props={d}/>)}
      </div>
    </div>
  );
}

export default MatchesContainer;