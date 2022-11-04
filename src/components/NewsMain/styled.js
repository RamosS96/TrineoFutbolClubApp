import styled from "styled-components";
import {colors} from '../../utils/colors';

export const NewsMainTitle = styled.h3`
  max-width: 90%;
  color: ${colors.black};
  padding: 0px 10px;
  font-weight: 550;
  @media (min-width: 615px){
    width: 100%;
    display: block;
  }
`;

export const NewsMainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align:center;
  flex-wrap: wrap;
  background-color: ${colors.white};
  width: auto;
  margin: 0px;
  padding: 0px 0px 10px 0px;
  box-shadow: 0px 0px 5px 1px ${colors.black};
  @media (min-width: 615px) {
    justify-content: center
  }
`;

export const NewsMainImg = styled.img`
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 0px;
  margin: 0px;
  @media (min-width: 615px) {
    display: inline-block
  }
`;

export const NewsMainInfo = styled.h4`
  display: flex;
  margin: 0px;
  padding: 5px;
  font-family: Josefina;
  font-weight: bolder;
  font-size: 1rem;
  @media (min-width: 615px){
    align-items: bottom;
    flex-direction: column;
    justify-content: bottom;
    text-justify: bottom;
    height: 40px;
  }
`

export const NewsMainContent = styled.p`
  font-family: JosefinaItalic;
  font-size: 1rem;
  font-weight: 300;
  width:100%;
  text-decoration: none;
  color: ${colors.black};
  &:hover {
    color: ${colors.black};
    text-decoration: none;
  }
`
export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:center;
  width: 100%;
  @media (min-width: 615px){
    width: 260px;
    padding: 10px;
  }
`