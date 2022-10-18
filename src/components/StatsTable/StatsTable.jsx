import React from 'react';
import './StatsTable.css';

const StatsTable = ({props}) => {
    return (
        <div className='statstable-container'>
            <table className='statstable'>
                <thead><tr>Estadísticas</tr></thead>
                <tbody>
                <tr>
                    <td></td>
                    <td className='statstable-rtitle'>Trineo FC</td>
                    <td className='statstable-rtitle'>{props.rival}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Goles</td>
                    <td>{props.GF}</td>
                    <td>{props.GC}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Posesión</td>
                    <td>{props.POS}</td>
                    <td>{100 - props.POS}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Remates</td>
                    <td>{props.REM}</td>
                    <td>{props.REMRIV}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Faltas</td>
                    <td>{props.FOULS}</td>
                    <td>{props.FOULSRIV}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Amarillas</td>
                    <td>{props.TA}</td>
                    <td>{props.TAR}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Rojas</td>
                    <td>{props.TR}</td>
                    <td>{props.TRR}</td>
                </tr>
                <tr>
                    <td className='statstable-rtitle'>Incidencias</td>
                    <td>{props.GOALS}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StatsTable;