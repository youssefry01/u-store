import React from 'react';
import Product from './Product';

const AmountField = ({ category, products, categoryName }) => {


  return (    

      <div className='flex flex-wrap flex-grow w-full px-4 mb-10'>
        
        <h1 className='flex pb-1 mb-3 text-2xl text-black font-semibold dark:text-white border-black border-opacity-10 border-b dark:border-white dark:border-opacity-10'>Select Amount</h1>

        <div className='flex lg:px-20  w-full justify-center items-center py-6 bg-[#f7f7f8] rounded-2xl dark:bg-[#0e0e10] drop-shadow-lg'> 

          {products.map( (product, id) => (  
            <Product key={id} category={category} products={products} product={product} categoryName={categoryName} />
          ))}

        </div>

      </div>    
  )
}

export default AmountField;