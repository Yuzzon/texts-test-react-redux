import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { Typography } from '@material-ui/core';
import { SingleTextContainer } from './styles';

const SingleText = () => {

   const { id } = useParams()

   const data = useSelector(state => state.texts.find(item => item.id === Number(id)), shallowEqual)

   return (
      <SingleTextContainer>
         <Link to='/'>&#8592; back to main page</Link>
         <Typography variant="h4" component="h4">{data.title}</Typography>
         <Typography variant="p" component="p">{data.body}</Typography>
      </SingleTextContainer>
   );
};

export default SingleText;
