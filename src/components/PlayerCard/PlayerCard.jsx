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
        <h4>{player.name}</h4>
        <p>{player.number}</p>
      </div>
      <div className='playercard-div-info'>
        <p>{player.position}, {player.positionalt}</p>
      </div>
    </div>
  );
}

export default PlayerCard;