import React, { useState } from 'react';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import _ from 'lodash';

const SearchElement = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const delayedSearch = _.debounce((query) => {
    if (query.length > 3) {
      onSearch(query);
    }
  }, 300);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    delayedSearch(value);
  };

  return (
    <InputGroup size="md" my={3} bg="white" className='w-[850px] mx-auto mt-16 mb-6 max-w-6xl'> {/* Add margin on top and bottom */}
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        pr="4.5rem"
        variant="outline"
        className='bg-white'
      />
      <InputRightElement width="4.5rem" height="100%">
        <SearchIcon color="gray.300" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchElement;
