import React from 'react';
import { Bar, Linkmatch } from './styled';

function MatchBar({ props }) {
    return (
        
            <Bar>
                
                    <Linkmatch>{props}</Linkmatch>
                
            </Bar>
        
    );
}

export default MatchBar;