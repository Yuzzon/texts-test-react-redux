import { Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const ShortenedP = styled(Typography)`
white-space: nowrap;
overflow: hidden;
padding: 5px 0;
text-overflow: ellipsis;
`
export const TextContainer = styled(Paper)`
line-height: 20px;
display: flex;
flex-direction: column;
margin: 15px 0;
padding: 15px;
   h5::first-letter{
      text-transform: uppercase;
   }
`
