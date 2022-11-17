import styled, {keyframes} from "styled-components";

const switchSlider = keyframes`
  0%{margin-left: 0}
  20%{margin-left: 0}

  25%{margin-left: -100%}
  45%{margin-left: -100%}

  50%{margin-left: -200%}
  70%{margin-left: -200%}

  75%{margin-left: -300%}
  100%{margin-left: -300%}
`

export const SliderContainer = styled.div`
  margin: auto;
  width: 500px;
  overflow: hidden;
`

export const SliderUl = styled.ul`
  padding: 0px;
  display: flex;
  width: 400%;
  animation: ${switchSlider} 20s infinite ease-in-out;
  &:hover{
    animation-play-state: paused;
  }
`

export const SliderLi = styled.li`
  list-style: none;
  width:100%;
`

export const SliderImg = styled.img`
  width:100%;
  max-height: 100%;
`