import React from 'react'

const CategoryInfo = ({ category, categoryName}) => {
  // const itemImg = require(`../../assets/${categoryName}/prodImg.png`);

  let itemImg;
  try {
    itemImg = require(`../../assets/${categoryName}/prodImg.png`);
   } catch (error) {
    itemImg = require(`../../assets/unknown.png`);
   }

  return (
    <div className='flex flex-wrap lg:h-60 w-full lg:w-1/3 mt-4'>

      <div className='flex w-full justify-center mx-10 border-black border-opacity-10 border-y dark:border-white dark:border-opacity-10'>
          <h1 className='text-2xl text-black font-semibold tracking-wide dark:text-white m-3'>{category.title}</h1>
      </div>

      <div className='flex justify-center w-full m-4 p-6'>
       <img src={ itemImg } className='rounded-md h-full drop-shadow-2xl select-none' alt={category.title} />
      </div>

      <div className='hidden flex-col w-full mx-10 whitespace-pre-wrap mb-4 lg:flex '>
        <p className='text-sm leading-8 font-normal text-black text-opacity-75 dark:text-white '>{category.description}</p>
      </div>

    </div>
  )
}

export default CategoryInfo;