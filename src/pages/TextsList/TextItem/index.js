import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ShortenedP, TextContainer } from './styles';

const TextItem = ({id, text, title}) => {
   return (
      <TextContainer>
         <Typography variant="h5">{title}</Typography>
         <ShortenedP>{text}</ShortenedP>
         <Link to={`/text/${id}`}>See more</Link>
      </TextContainer>
   );
};

export default TextItem;
