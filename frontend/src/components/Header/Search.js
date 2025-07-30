import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../features/search/searchSlice';

const Search = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.search);

  const handleInputChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex items-center gap-2 mr-6">
      <IoIosSearch className="w-7 h-7 hover:cursor-pointer focus:cursor-pointer"/>
        <input
          className="bg-gray-200 rounded-md dark:bg-neutral-800 pl-2 h-8 w-3/5 mt-2 text-white lg:w-full lg:h-10 lg:mt-0"
          placeholder="Search Categories"
          id="search"
          type="text"
          value={search}
          onChange={handleInputChange}
        />
    </div>
  );
};

export default Search;
