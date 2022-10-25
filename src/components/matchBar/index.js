import React from 'react';
import { Bar, Linkmatch } from './styled';

function MatchBar({ props, link }) {
    return (
        
            <Bar>
                
                    <Linkmatch as="a" href={`/matches/${link}`} >{props}</Linkmatch>
                
            </Bar>
        
    );
}

export default MatchBar;