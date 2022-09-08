import React from 'react';


const StatsTable = ({props}) => {
    return (
        <div>
            <table>
                <thead><tr>Estadísticas</tr></thead>
                <tbody>
                <tr>
                    <td></td>
                    <td>Trineo FC</td>
                    <td>{props.rival}</td>
                </tr>
                <tr>
                    <td>Goles</td>
                    <td>{props.GF}</td>
                    <td>{props.GC}</td>
                </tr>
                <tr>
                    <td>Posesión</td>
                    <td>{props.POS}</td>
                    <td>{100 - props.POS}</td>
                </tr>
                <tr>
                    <td>Remates</td>
                    <td>{props.REM}</td>
                    <td>{props.REMRIV}</td>
                </tr>
                <tr>
                    <td>Faltas</td>
                    <td>{props.FOULS}</td>
                    <td>{props.FOULSRIV}</td>
                </tr>
                <tr>
                    <td>Amarillas</td>
                    <td>{props.TA}</td>
                    <td>{props.TAR}</td>
                </tr>
                <tr>
                    <td>Rojas</td>
                    <td>{props.TR}</td>
                    <td>{props.TRR}</td>
                </tr>
                <tr>
                    <td>Incidencias</td>
                    <td>{props.GOALS}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StatsTable;