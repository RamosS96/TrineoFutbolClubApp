import React from 'react';
import { SliderContainer, SliderUl, SliderLi, SliderImg } from './styled';

function ImgSlider({props}) {
  return (
    <SliderContainer>
      <SliderUl>
        <SliderLi><SliderImg src={props[0]}/></SliderLi>
        <SliderLi><SliderImg src={props[1]}/></SliderLi>
        <SliderLi><SliderImg src={props[2]}/></SliderLi>
        <SliderLi><SliderImg src={props[0]}/></SliderLi>
      </SliderUl>
    </SliderContainer>
  );
}

export default ImgSlider;