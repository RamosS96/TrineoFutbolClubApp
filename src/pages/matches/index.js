import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StatsTable from '../../components/StatsTable/';
import { getMatches } from '../../utils/fn';
import { Container } from '../../components/Container';
import { ImgMatch } from './styled'
import { Title3 } from '../../components/Title';
import { WrapperLG } from '../../components/Wrapper/styled';
import ImgSlider from '../../components/ImgSlider';

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
        <WrapperLG>
        <Title3>Partido contra {match.filter(mat => mat.date == idParamMatch).map(d => <p>{d.rival}</p>)}</Title3>
        {match.filter(mat => mat.date == idParamMatch).map(d => <StatsTable props={d} />)}
        {match.filter(mat => mat.date == idParamMatch).map(d => (d.img.length < 10 ) ? <ImgSlider props={d.img}/> : <ImgMatch src={d.img}/>)}
        
        </WrapperLG>
    </Container>
  );
}

export default MatchesContainer;