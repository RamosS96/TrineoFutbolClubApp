import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Table = styled.table`
  background-color: ${colors.lbrown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border: solid 1px ${colors.hbrown};
  height: fit-content;
`

export const Tr = styled.tr`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border: solid 1px ${colors.hbrown};
`

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Thead = styled.thead`
  justify-content: center;

`

export const Td = styled.td`
  display: block;
  width: 110px;
  font-family: JosefinaItalic;
  color: ${colors.black}
`

export const TitleTd = styled.td`
  display: block;
  width: 110px;
  font-family: JosefinaItalic;
  font-weight: bolder;
  color: ${colors.bred};
  text-align: center;
  font-size: 1.3rem;
`

export const TableTitle = styled.tr`
  display: block;
  width: 110px;
  font-family: JosefinaItalic;
  font-weight: bolder;
  color: ${colors.bred};
  text-align: center;
  font-size: 1.8rem;
`