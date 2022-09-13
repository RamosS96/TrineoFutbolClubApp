import {React, useContext} from 'react';
import DateContext from '../../contexts/datesContext';
import './ResultsBar.css';

function ResultsBar({props}) {
  const routeStats = `/matches/${props.date}`;
  const dateCtx = useContext(DateContext);

  return (
    
        <div className='col-sm-4 col-md-2'>
          <div className={props.result}>
            <p className='w-100'>{props.dateStamp}</p>
            <p className='w-100'>VS. {props.rival}</p>
            <p className='w-100'>{props.resulte}</p>
            <a href={routeStats} onClick={dateCtx(props.date)} className='text-decoration-none'>Estadisticas</a>
          </div>
        </div>
      
  );
}

export default ResultsBar;