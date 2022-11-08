import styled, {keyframes} from "styled-components";

const SliderKeyframes = keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(calc(-250px * 7))}
  `

export const Slides = styled.div`
  animation-name: ${SliderKeyframes};
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
  & , &:after {
    background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  };
  &:after{
    right: 0;
  top: 0;
  transform: rotateZ(180deg);
  };
  & {
    left: 0;
    top: 0;
  }
`

export const Sliderer = styled.div`
          animation: ${SliderKeyframes} 10s linear infinite;
  display: flex;
  width: calc(250px * 14);
`