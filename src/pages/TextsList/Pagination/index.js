import React from 'react';

import Pagination from '@material-ui/lab/Pagination';
import {setPage} from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { PaginationContainer } from './styles';

export default function PagePagination() {

   const dispatch = useDispatch();
   const texts = useSelector(state => state.texts);
   const totalTexts = texts.length

   const handleChange = (event, value) => {
      dispatch(setPage(value));
   };

   return (
      <PaginationContainer>
         <Pagination count={
               texts % 5 > 0 ? parseInt(totalTexts / 5 + 1) : parseInt(totalTexts / 5)
         } onChange={handleChange} />
      </PaginationContainer>
   );
}
