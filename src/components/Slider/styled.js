import styled, {keyframes} from "styled-components";

export const ContenedorSlider = styled.div`
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 960px;
  `

export const TrackerSlider = styled.div`
  display: flex;
  width: calc(250px * 14);
`
export const Slides = styled.div`
  height: 100px;
  width: 250px;
`