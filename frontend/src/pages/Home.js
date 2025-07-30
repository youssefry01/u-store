import React from 'react';
import Loading from '../components/General/Loading.js'
import HomeFeed from '../components/Home/HomeFeed.js';
import Missing from '../components/General/Missing.js';
import { useGetCategoriesQuery } from '../features/categories/categoriesApiSlice.js';

const Home = () => {
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery('categoriesList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
  
  if (isLoading) return <Loading />;

  if (isError && categories) return <Missing msg={'Error'} msg2={error?.data?.message}/>;

  return (
    <main className='flex flex-col bg-[#f7f7f8] grow dark:bg-[#0e0e10] z-50'>
      {isSuccess && 
        <HomeFeed categories={categories} />
      }
    </main>
  )
}

export default Home;