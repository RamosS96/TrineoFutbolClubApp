import React, {useContext} from 'react';
import './ResultsBar.css';

function ResultsBar({props}) {
  const routeStats = `/matches/${props.date}`;
  

  return (
    
        <div className='col-sm-4 col-md-2'>
          <div className={props.result}>
            <p className='w-100'>{props.dateStamp}</p>
            <p className='w-100'>VS. {props.rival}</p>
            <p className='w-100'>{props.resulte}</p>
            <a href={routeStats} className='text-decoration-none'>Estadisticas</a>
          </div>
        </div>
      
  );
}

export default ResultsBar;