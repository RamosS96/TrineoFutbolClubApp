import React from 'react';
import {BoxNews,ImgNews} from './styled';
import { Title2 } from '../Title';
import { Subtitle } from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Wrapper } from '../Wrapper/styled';

function NewsDetail({props}) {
  return (
    <BoxNews>
      <Title2>{props.title}</Title2>
      <ImgNews src={props.img}/>
      <Subtitle>{props.date}</Subtitle>
      <Wrapper>
        <Paragraph>{props.content}</Paragraph>
      </Wrapper>
    </BoxNews>
  );
}

export default NewsDetail;