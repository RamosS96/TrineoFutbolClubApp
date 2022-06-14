import React from 'react';

function PlayerCard({player}) {
  return (
    <div>
      <div>
        <img src={player.img}/>
      </div>
      <div>
        <h3>{player.name}</h3>
        <h4>{player.number}</h4>
      </div>
      <div>
        <h5>Posisión</h5>
        <h6>{player.position}, {player.positionalt}</h6>
      </div>
    </div>
  );
}

export default PlayerCard;