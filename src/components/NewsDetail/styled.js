import styled from "styled-components"
import { colors } from "../../utils/colors";


export const BoxNews = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`
export const ImgNews = styled.img`
  display: block;
  height: auto;
  width: 100%;
  max-width: 350px;
`