import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`
export const MainTitle = styled.h1`
  font-family: Josefina;
  font-weight: bolder;
  font-size: 1rem;
  text-align: center;
  display: block;
  width: 100%;
 `

export const Title = styled.h3`
  font-family: JosefinaItalic;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  width: 100%;
`