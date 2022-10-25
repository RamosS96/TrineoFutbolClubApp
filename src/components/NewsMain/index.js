import React from 'react';
import { NewsMainImg, NewsMainTitle, NewsMainInfo, NewsMainWrapper, NewsMainContent } from './styled';

function NewsMain({props}) {
  return (
    <NewsMainWrapper>
      <NewsMainTitle>{props.title}</NewsMainTitle>
      <NewsMainImg src={props.img}/>
      <NewsMainInfo>{props.datestamp}</NewsMainInfo>
      <NewsMainContent as="a" href={`/matches/${props.date}`}>{props.content}</NewsMainContent>
    </NewsMainWrapper>
  );
}

export default NewsMain;