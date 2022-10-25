import styled from "styled-components";
import {colors} from '../../utils/colors';

export const NewsMainTitle = styled.h3`
  max-width: 90%;
  color: ${colors.black};
  padding: 0px 10px;
  font-weight: 550;
`;

export const NewsMainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex-wrap: wrap;
  background-color: ${colors.white};
  width: 95%
`;

export const NewsMainImg = styled.img`
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 0px;
  margin: 0px;

`;

export const NewsMainInfo = styled.h4`
  margin: 0px;
  padding: 5px;
  font-family: Josefina;
  font-weight: bolder;
  font-size: 1rem;
`

export const NewsMainContent = styled.p`
  font-family: JosefinaItalic;
  font-size: 1rem;
  font-weight: 300;
  width:100%
`