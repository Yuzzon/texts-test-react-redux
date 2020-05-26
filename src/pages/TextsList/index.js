import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TextItem from './TextItem'
import SearchInput from './SearchInput';
import { ListContainer } from './styles';
import PagePagination from './Pagination';

const TextsList = () => {

   const texts = useSelector(state => state.texts);

   const input = useSelector(state => state.searchText);

   const pageNum = useSelector(state => state.page);

   const [filteredTexts, setFilteredTexts] = useState(texts)

   let startIndex = pageNum === 1 ? 0 : 5 * (pageNum - 1)

   useEffect(() => {
      setFilteredTexts(texts.filter(item => item.title.includes(input) || item.body.includes(input)))
   },
      [input, texts]
   );

   return (
      <ListContainer>
         <SearchInput />
         {filteredTexts.slice(startIndex, startIndex + 5).map(item => (
            <TextItem key={item.id} id={item.id} title={item.title} text={item.body} />
         ))}
         <PagePagination />
      </ListContainer>
   );
};

export default TextsList;
