import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = () => {
    const titleStyle = 'font-JosefinSans font-normal text-lg m-4'
  return (
    <div className=''>
        <ul className='hidden lg:flex justify-center items-center mr-6'>

            <li className={titleStyle} ><Link to='amazon'>Amazon</Link> </li>
            <li className={titleStyle} ><Link to='netflix'>Netflix</Link> </li>
            <li className={titleStyle} ><Link to='steam'>Steam</Link> </li>
            <li className={titleStyle} ><Link to='playstation'>Playstation</Link> </li>
            <li className={titleStyle} ><Link to='apple'>Apple</Link> </li>
            <li className={titleStyle} ><Link to='xbox'>Xbox</Link> </li>
        </ul>
    </div>
  )
}

export default ProductsNav;