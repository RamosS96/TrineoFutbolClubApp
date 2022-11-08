import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/StatsTable';
import { getMatches } from '../../utils/fn';
import { Container } from '../../components/Container';
import { ImgMatch } from './styled'

function MatchesContainer() {
  const [match, setMatch] = useState([])
  const { idParamMatch } = useParams();



  useEffect(() => {
    getMatches()
      .then(snapshot => {
        setMatch(snapshot.docs.map(doc => {
          return doc.data()
        }));

      });
  }, []);


  return (
    <Container>

        <h3>Partido contra {match.filter(mat => mat.date == idParamMatch).map(d => <p>{d.rival}</p>)}</h3>
    


        {match.filter(mat => mat.date == idParamMatch).map(d => <StatsTable props={d} />)}



  
        {match.filter(mat => mat.date == idParamMatch).map(d => <ImgMatch src={d.img} />)}


    </Container>
  );
}

export default MatchesContainer;