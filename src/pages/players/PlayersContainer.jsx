import React from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import { useEffect } from 'react';

const getPlayers = () => {
  const db = getFirestore();
  const playersCollection = collection(db, 'players');

  return getDocs(playersCollection);
}


function PlayersContainer() {
  const [players, setPlayers] = useState([]);
  
  useEffect(()=>{
    getPlayers()
  .then(snapshot => {
    setPlayers(snapshot.docs.map(doc => {
      return doc.data();
    }));
    console.log(players)
  })
  },[])
  
  
  return (
    
    <div>
      {players.map(asd=> <PlayerCard player={asd}/>)}
    </div>
  )
}

export default PlayersContainer;