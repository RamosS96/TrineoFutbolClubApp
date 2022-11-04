import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-height: 350px;
  box-shadow: 0px 0px 30px rgb(182, 180, 179) inset;
  border-radius: 15px;
  margin: 5px 0px;
  background-color: ${colors.hbrown};
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  flex-wrap: wrap;
  width: 120px;
`

export const ImgPlayer = styled.img`
  height: 180px;
  width: 180px;
  display: flex;
  max-height: 200px;
  object-fit: cover;
  padding: 10px;
`

export const TitlePlayer = styled.h5`
  color: ${colors.white};
  font-family: Josefina;
  font-size: bolder;
  width: 100%;
  text-align: center;
  &:hover {
    text-decoration: none;
    color: ${colors.lbrown}
  }
`

export const DetailsPlayer = styled.span`
  color: ${colors.white};
  font-weight: bolder;
  text-align: center;
  padding: 5px 0px;
  &:hover{
    text-decoration: none;
    color: ${colors.lbrown}
  }
`