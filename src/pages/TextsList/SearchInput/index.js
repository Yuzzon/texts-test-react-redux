import React from 'react';
import {TextInput, InputContainer} from './styles';
import { useDispatch } from 'react-redux';
import { searchText } from '../../../redux/actions';

const SearchInput = () => {

   const dispatch = useDispatch();

   const onInputChange = (e) => {
      const value = e.target.value
      e.preventDefault();
      dispatch(searchText(value))
   }

   return (
   <InputContainer>
      <TextInput label= "Search in texts" onChange={onInputChange}/>
   </InputContainer>
   );
};

export default SearchInput;
