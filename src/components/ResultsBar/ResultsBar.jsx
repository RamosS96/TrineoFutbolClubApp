import React from 'react';

function ResultsBar({props}) {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-4 col-md-2'>
          <div className=''>
            <p>{props.date}</p>
            <p>VS. {props.rival}</p>
            <p>{props.resulte}</p>
            <p>Estadisticas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsBar;