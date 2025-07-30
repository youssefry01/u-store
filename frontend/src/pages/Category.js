import React from 'react';
import Loading from '../components/General/Loading.js'
import { useParams } from 'react-router-dom';
import CategoryFeed from '../components/Category/CategoryFeed.js';
import Missing from '../components/General/Missing.js';
import { useGetCategoriesQuery } from '../features/categories/categoriesApiSlice.js';
import { useGetProductsQuery } from '../features/products/productsApiSlice.js';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { data: categories, isLoading: isCategoriesLoading, isSuccess: isCategoriesSuccess, isError: isCategoriesError, error: categoriesError } = useGetCategoriesQuery('categoriesList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
  const { data: products, isLoading: isProductsLoading, isSuccess: isProductsSuccess, isError: isProductsError, error: productsError } = useGetProductsQuery('productsList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
  
  if (isCategoriesLoading || isProductsLoading) return <Loading />;

  if (isCategoriesError || isProductsError) {
    const errorMessage = categoriesError?.data?.message || productsError?.data?.message;
    return <Missing msg={'Error'} msg2={errorMessage}/>
  }

  const categoryProducts = Object.values(products.entities).filter(product =>
    product.category.toLowerCase() === categoryName.toLowerCase()
  );
  const category = Object.values(categories?.entities || {}).find((category) => category.name.toLowerCase() === categoryName.toLowerCase());
  
  return (
    <main className='flex flex-col bg-[#f7f7f8] grow dark:bg-[#0e0e10]'>
      {isCategoriesSuccess && isProductsSuccess &&
        <CategoryFeed category={category} products={categoryProducts} categoryName={categoryName} />
      }
    </main>
  )
}

export default CategoryPage;