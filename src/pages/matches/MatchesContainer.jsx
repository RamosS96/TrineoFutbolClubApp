import React, { useState } from 'react';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import './MatchesContainer.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';


  



function MatchesContainer({props}) {
  const [match, setMatch] = useState([])
  const {idParam} = useParams();
  
  useEffect(()=>{
     
    
  })

  return (
    <div className='container matches-container'>
      <div className='row'>
        <div className='col-sm-12 col-md-8'>
          <h1>Partido Vs. </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <img src='' alt=''/>
        </div>
        <div className='col-sm-12 col-md-8'>
          <p>Texto Noticias</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <p>tabla con estadisticas</p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>Incidencias</p>
        </div>
      </div>
    </div>
  );
}

export default MatchesContainer;