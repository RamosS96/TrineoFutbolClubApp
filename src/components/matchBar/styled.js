import styled from "styled-components";
import {colors} from "../../utils/colors";


export const Bar = styled.div`
    background-color: ${colors.lbrown};
    display: flex;
    margin: 0px;
    padding: 5px;
` ;

export const Linkmatch = styled.button`
    display: flex;
    text-decoration: none;
    color: ${colors.black};
    background-color: ${colors.white};
    border: solid .2px ${colors.bred};
    justify-content: center;
    &:hover {
        color: ${colors.white};
        background-color: ${colors.hbrown};
    };
    @media (max-width: 576px) {
        width: 350px;
    };
    @media (min-width: 577px){
        width: 220px;
    }
`