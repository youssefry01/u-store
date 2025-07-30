import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  // const categoryImg = require(`../../assets/${category.name}/category-image.png`);
  let categoryImg;
  try {
    categoryImg = require(`../../assets/${category.name}/category-image.png`);
   } catch (error) {
    categoryImg = require(`../../assets/unknown.png`);
   }
  const categoryLink = `/${category.name}`

  return (
    <li className='w-1/3 p-4 lg:p-10 lg:w-1/4'>

      <Link to={ categoryLink } className='select-none'>

      <img src={ categoryImg } className='w-full rounded-3xl lg:hover:scale-110 focus:scale-110 drop-shadow-2xl' alt={category.name} />

      </Link>

    </li>
  )
}

export default Category;