import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ShortenedP, TextContainer } from './styles';

const TextItem = (props) => {
   return (
      <TextContainer>
         <Typography variant="h5">{props.title}</Typography>
         <ShortenedP>{props.text}</ShortenedP>
         <Link to={`/text/${props.id}`}>See more</Link>
      </TextContainer>
   );
};

export default TextItem;
