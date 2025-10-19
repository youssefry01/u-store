import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../features/search/searchSlice';

const Search = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);

  const handleInputChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible); // Toggle input visibility
  };

  return (
    <div className="flex items-center gap-2 mr-6">
      <IoIosSearch className="w-7 h-7 hover:cursor-pointer focus:cursor-pointer" onClick={toggleInputVisibility}/>

      {/* Desktop view */}
      {isInputVisible && (
        <input
          className="hidden lg:inline-block bg-gray-200 rounded-md dark:bg-neutral-800 pl-2 h-8 w-3/5 mt-2 text-black dark:text-white lg:w-full lg:h-10 lg:mt-0"
          placeholder="Search for a product"
          id="search"
          type="text"
          value={search}
          onChange={handleInputChange}
        />
      )}

      {/* Mobile view */}
      {isInputVisible && (
        <div className='absolute z-100 h-10 flex justify-center items-center p-1 w-full top-full left-0 lg:hidden bg-white dark:bg-[#18181b]'>
          <input
            className="h-full w-3/4 pl-2 px-10 bg-gray-200 rounded-md dark:bg-neutral-800 text-black dark:text-white"
            placeholder="Search for a product"
            id="search"
            type="text"
            value={search}
            onChange={handleInputChange}
          />
        </div>
      )}

    </div>
  );
};

export default Search;
