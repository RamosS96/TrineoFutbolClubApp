import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${colors.white};
  max-width: 360px;
  padding: 10px;
  margin: 10px 0px;
  align-items: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 220px
`

export const Title = styled.h4`
  font-family: JosefinaItalic;
  width: 100%;
`

export const Img = styled.img`
  display: block;
  width: 100px;
  height: 100px;
`

export const Text = styled.p`
  display: block;
  width: 100%;
  font-family: Josefina;
  font-size: 0.8rem;
`

export const Date = styled.span`
  display: block;
  justify-content: right;
  text-align: right;
  font-family: JosefinaItalic;
  width: 100%
`