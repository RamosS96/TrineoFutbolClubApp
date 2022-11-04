import React from 'react';
import 'animate.css';
import { swalFire } from '../../utils/fn';
import { BtnPlayer } from '../Buttons';
import { ImgPlayer, Card, TitlePlayer, CardDetails, DetailsPlayer } from './styled'

function PlayerCard({player}) {
  return (
    <Card>
        <ImgPlayer src={player.img} alt=''/>
        <CardDetails>
        <TitlePlayer as="a" href={`./players/${player.number}`}>{player.name}</TitlePlayer>
        <DetailsPlayer as="a" href={`./players/${player.number}`}>{player.number}</DetailsPlayer>
        <BtnPlayer onClick={() => swalFire(player, BtnPlayer)}>Estadisticas</BtnPlayer>
        <DetailsPlayer>{player.position}, {player.positionalt}</DetailsPlayer>
        </CardDetails>
    </Card>
  );
}

export default PlayerCard;