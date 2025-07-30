import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = () => {
    const titleStyle = 'font-JosefinSans font-normal text-lg m-4'
  return (
    <div className=''>
        <ul className='hidden lg:flex justify-center items-center mr-6'>

            <li className={titleStyle} ><Link to='steam'>Steam</Link> </li>
            <li className={titleStyle} ><Link to='valorant'>Valorant</Link> </li>
            <li className={titleStyle} ><Link to='league-of-legends'>League of Legends</Link> </li>
            <li className={titleStyle} ><Link to='apex'>Apex</Link> </li>
            <li className={titleStyle} ><Link to='xbox'>Xbox</Link> </li>
            <li className={titleStyle} ><Link to='roblox'>Roblox</Link> </li>
        </ul>
    </div>
  )
}

export default ProductsNav;