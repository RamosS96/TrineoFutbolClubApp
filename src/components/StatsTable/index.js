import React from 'react';
import { Table, Thead, Tbody, Tr, Td, TitleTd, TableTitle} from './styled';


function StatsTable({ props }) {
  return (
    <Table>
      <Thead><Tr><TableTitle> Estadísticas</TableTitle></Tr></Thead>
      <Tbody>
        <Tr>
          <Td></Td>
          <TitleTd>Trineo FC</TitleTd>
          <TitleTd>{props.rival}</TitleTd>
        </Tr>
        <Tr>
          <TitleTd>Goles</TitleTd>
          <Td>{props.GF}</Td>
          <Td>{props.GC}</Td>
        </Tr>
        <Tr>
          <TitleTd>Posesión</TitleTd>
          <Td>% {props.POS}</Td>
          <Td>% {100 - props.POS}</Td>
        </Tr>
        <Tr>
          <TitleTd >Remates</TitleTd>
          <Td>{props.REM}</Td>
          <Td>{props.REMRIV}</Td>
        </Tr>
        <Tr>
          <TitleTd >Faltas</TitleTd>
          <Td>{props.FOULS}</Td>
          <Td>{props.FOULSRIV}</Td>
        </Tr>
        <Tr>
          <TitleTd >Amarillas</TitleTd>
          <Td>{props.TA}</Td>
          <Td>{props.TAR}</Td>
        </Tr>
        <Tr>
          <TitleTd >Rojas</TitleTd>
          <Td>{props.TR}</Td>
          <Td>{props.TRR}</Td>
        </Tr>
        <Tr>
          <TitleTd>Incidencias</TitleTd>
          <Td>{props.GOALS}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default StatsTable;