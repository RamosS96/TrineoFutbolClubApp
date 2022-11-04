import React from 'react';
import { NewsMainImg, NewsMainTitle, NewsMainInfo, NewsMainWrapper, NewsMainContent, SideContent } from './styled';



function NewsMain({props}) {
  return (
    <NewsMainWrapper>
      <NewsMainTitle>{props.title}</NewsMainTitle>
      <NewsMainImg src={props.img}/>
      <SideContent>
      <NewsMainInfo>{props.datestamp}</NewsMainInfo>
      <NewsMainContent as="a" href={`/news/${props.date}`}>{props.content}</NewsMainContent>
      </SideContent>
    </NewsMainWrapper>
  );
}

export default NewsMain;