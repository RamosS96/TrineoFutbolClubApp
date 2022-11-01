import React from 'react';
import { Title, Card, Content, Img, Text, Date } from './styled';
function NewsCard({props}) {
  return (
    <Card as="a" href={`/news/${props.date}`}>
      <Img src={props.img}/>
      <Content>
        <Title>{props.title}</Title>
        <Text>{props.content}</Text>
        <Date>{props.datestamp}</Date>
      </Content>
    </Card>
  );
}

export default NewsCard;