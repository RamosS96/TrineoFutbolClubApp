import React from 'react';
import { ResultContainer, Line } from './styled';
import { colors } from '../../utils/colors';

const getColor = (color) => {
  if (color === "win"){
    return colors.win
  } if (color === "draw") {
    return colors.draw
  } if (color === "lose") {
    return colors.lose
  }
}

function ResultsBar({props}) {
  const routeStats = `/matches/${props.date}`;

  return (
    
        <ResultContainer bg={`${getColor(props.result)}`}>

            <Line>{props.dateStamp}</Line>
            <Line>VS. {props.rival}</Line>
            <Line>{props.resulte}</Line>
            <Line as="a" href={routeStats}>Estadisticas</Line>

        </ResultContainer>
      
  );
}

export default ResultsBar;