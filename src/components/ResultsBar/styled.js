import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 125px;
  background-color: ${props => props.bg };
  @media (max-width: 615px){
    display:none
  }
`;

export const Line = styled.span`
  margin: 0px;
  padding: 2px 0px;
  text-decoration: none;
  color: ${colors.black}
`