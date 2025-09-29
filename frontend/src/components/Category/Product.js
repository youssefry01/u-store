import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPrice } from '../../features/purchase/purchaseSlice';

const Product = ({ category, products, product, categoryName }) => {
  const dispatch = useDispatch();
  
  let prodIcon;
  try {
    prodIcon = require(`../../assets/${categoryName}/prodIcon.png`);
   } catch (error) {
    prodIcon = require(`../../assets/unknown.png`);
   }
  // const prodIcon = require(`../../assets/${categoryName}/prodIcon.png`)

  const selectedPrice = useSelector((state) => state.purchase.selectedPrice);

  const handleSelectPrice = (productPrice) => {
      dispatch(setSelectedPrice(productPrice));
  };

  return (
    <div className={`flex flex-wrap m-4 rounded-2xl select-none transition-all duration-300 
        ${selectedPrice === product.price ? 'border-blue-500 bg-blue-100 dark:border-blue-500  dark:bg-blue-900'
        : product.stock === 0 ? 'opacity-60 pointer-events-none' : 'cursor-pointer border-black border-opacity-10 dark:border-white dark:border-opacity-10'
      }`} onClick={product.codes.length === 0 ? undefined : () => handleSelectPrice(product.price)}>

        <div className='flex flex-wrap p-4 w-full justify-center items-center rounded-x-2xl rounded-t-2xl border-black border-opacity-10 border-x-2 border-t-2 dark:border-white dark:border-opacity-10'>

            <div className='flex w-full justify-center items-center mb-2'>
               <h1 className='font-semibold dark:text-white'>{product.amount} {product.currency}</h1>
            </div>

            <div className='flex w-full justify-center items-center'>
                <img src={ prodIcon } className={`size-10 ${categoryName === 'amazon' ? 'rounded-full dark:bg-white' : categoryName === 'apple' ? 'rounded-full' : categoryName === 'playstation' ? '' : ''}`} alt={product.name} />
                {/* <img src={ prodIcon } className={`size-10 ${categoryName === 'valorant' ? 'bg-black rounded-full dark:bg-none ' : categoryName === 'playstation' ? '' : ''}`} alt={product.name} /> */}
            </div>

        </div>

        <div className='flex w-full justify-center items-center rounded-b-2xl bg-[#0e0e10] bg-opacity-20 dark:bg-opacity-20 dark:bg-[#f7f7f8] border-black border-opacity-10 border-b-2 border-x-2 dark:border-white dark:border-opacity-10'>

            <h1 className={` my-4 font-semibold ${!product.codes.length ? 'text-gray-600 dark:text-gray-400' : 'text-green-700 dark:text-green-500'}`}>
              {!product.codes.length ? 'Out of Stock' : `${product.price} EGP`}
            </h1>

        </div>
    </div>
  )
}

export default Product