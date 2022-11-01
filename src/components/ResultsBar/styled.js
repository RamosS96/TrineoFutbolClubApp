import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 125px;
  margin-bottom: 50px;
  background-color: ${props => props.bg };
  @media (max-width: 605px){
    display:none
  }
`;

export const Line = styled.span`
  margin: 0px;
  padding: 2px 0px;
  text-decoration: none;
  color: ${colors.black}
`