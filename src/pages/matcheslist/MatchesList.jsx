import React, {useEffect, useState} from 'react';
import './MatchesList.css';
import MatchBar from '../../components/MatchBar';
import { Wrapper } from '../../components/Wrapper/styled';
import {getMatches} from '../../utils/fn';
import { Container } from '../../components/Container';


function MatchesList() {
    const [match, setMatch] = useState([]);

    useEffect(()=>{
        getMatches()
        .then(snapshot => {
          setMatch(snapshot.docs.map(doc => {
            return doc.data()
          }));
    
        });
        },[]);

    return (
        <Container>
            <h2>TODOS LOS PARTIDOS</h2>
            <Wrapper>
            {match.map(d => <MatchBar key={d.date} link={d.date} props={`${d.rival} - ${d.GF} - ${d.GC}`}></MatchBar>)}            
            </Wrapper>
        </Container>
    );
}

export default MatchesList;