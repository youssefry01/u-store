import React from 'react'
import CatsDashNav from './CatsDashNav';
import ProdsDashView from './ProdsDashView';

const CatsDashView = ({ categories, products, categoryName }) => {
    const category = categories?.find((item) => item.name === categoryName?.toLowerCase());

    const categoryProducts = products?.filter(prod =>
        prod.category.toLowerCase() === categoryName?.toLowerCase()
    );

  return (
    <div className='flex flex-col w-full'>
        <CatsDashNav categories={categories} category={category} categoryName={categoryName} />

        <ProdsDashView products={categoryProducts} categoryName={categoryName} />
    </div>
  )
}

export default CatsDashView