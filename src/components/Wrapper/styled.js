import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    background-color: ${colors.white};
    width: 100%;
    margin: 10px 0px;
    `;

export const WrapperLG = styled.section`
    @media (min-width: 605px) {
     display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    background-color: ${colors.white};
    width: 100%;
    margin: 10px 0px;
        }
    `