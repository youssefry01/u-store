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
    <div className='flex  flex-wrap lg:h-auto w-full lg:w-1/3 mt-4'>

      <div className='flex w-full justify-center items-center mx-10 h-14 border-black border-opacity-10 border-y dark:border-white dark:border-opacity-10'>
          <h1 className='text-2xl text-black font-semibold tracking-wide dark:text-white m-3'>{category.title}</h1>
      </div>

      <div className='flex w-full m-4 p-6'>
       <img src={ itemImg } className='rounded-md drop-shadow-2xl select-none w-full h-32 lg:h-60' alt={category.title} />
      </div>

      <div className='flex flex-col w-full mx-10 whitespace-pre-wrap mb-6 lg:flex '>
        <p className='text-xs lg:text-sm leading-6 lg:leading-8 font-normal text-black text-opacity-75 dark:text-white '>{category.description}</p>
      </div>

    </div>
  )
}

export default CategoryInfo;