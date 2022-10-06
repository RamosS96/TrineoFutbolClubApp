import React from 'react';
import './PlayerCard.css';
import 'animate.css';


function PlayerCard({player}) {
  return (
    <div className='playercard col-md-3 col-sm-6 animate__animated animate__fadeInDown'>
      <div className='playercard-div-img'>
        <img className='playercard-img' src={player.img} alt=''/>
      </div>
      <div className='playercard-div-title'>
        <h5><a className='a-playercard' href={`./players/${player.number}`}>{player.name}</a></h5>
        <a className='a-playercard' href={`./players/${player.number}`}>{player.number}</a>
      </div>
      <div className='playercard-div-info'>
        <p>{player.position}, {player.positionalt}</p>
      </div>
    </div>
  );
}

export default PlayerCard;