import React from 'react';
import useDebounce from "../../hooks/useDebounce.jsx";
import Slider from './Slider.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../features/search/searchSlice.js';
import Category from './Category.js';
import Divider from '../General/Divider.js';
import { useSelector } from 'react-redux';

const HomeFeed = ({ categories }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);

  useEffect(() => {
    if (categories && categories.ids && categories.ids.length > 0) {
      const filteredCategories = categories.ids.map((catId) => {
        const category = categories.entities[catId];
        return category?.name.toLowerCase().includes(search.toLowerCase()) ? category : null;
      }).filter(Boolean);
      dispatch(setSearchResults(filteredCategories));
    }
  }, [categories, search, dispatch]);

  const searchResults = useSelector((state) => state.search.searchResults);

  const debouncedSearchValue = useDebounce(search, 1000);

  return (
    <>

    <Slider />

    <Divider />

    <ul className='flex flex-wrap justify-center items-center h-3/4 w-full lg:px-20 rounded-2xl lg:flex-wrap lg:mb-0'>

     {searchResults.map(category => <Category key={category.id} category={category} searchTerm={debouncedSearchValue} />)}

    </ul>

    </>
  )
}

export default HomeFeed;