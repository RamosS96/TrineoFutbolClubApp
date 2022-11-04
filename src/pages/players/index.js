import React from 'react';
import { useState } from 'react';
import PlayerCard from '../../components/PlayerCard';
import { useEffect } from 'react';
import { getPlayers } from '../../utils/fn';
import { Container } from '../../components/Container'
import { Title3, Title1 } from '../../components/Title';
import { Wrapper } from '../news/styled';

function PlayersContainer() {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    getPlayers()
  .then(snapshot => {
    setPlayers(snapshot.docs.map(doc => { 
      return doc.data()}
      ))     
  })
},[]);

  return (
    
    <Container>
      <Title1>Plantel 2022</Title1>
      <Title3>Arqueros</Title3>
      <Wrapper>{players.filter(p => p.zone === 'G').map(p => <PlayerCard key={p.number} player={p}/>)}</Wrapper>
      <Title3>Defensores</Title3>
      <Wrapper>{players.filter(p => p.zone === 'D').map(p => <PlayerCard key={p.number} player={p}/>)}</Wrapper>
      <Title3>Volantes</Title3>
      <Wrapper>{players.filter(p => p.zone === 'M').map(p => <PlayerCard key={p.number} player={p}/>)}</Wrapper>
      <Title3>Delanteros</Title3>
      <Wrapper>{players.filter(p => p.zone === 'F').map(p => <PlayerCard key={p.number} player={p}/>)}</Wrapper>
    </Container>
  )
}

export default PlayersContainer;