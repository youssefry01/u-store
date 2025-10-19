import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import storeLogo from "../../assets/storeLogo.png";
import ProductsNav from "./ProductsNav";
import OtherNav from "./OtherNav";
import { HiMenu } from "react-icons/hi";
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle input visibility
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={sidebarRef} className='flex sticky top-0 w-full p-4 h-20 bg-white border-black z-[9999] border-opacity-10 border-b lg:justify-center items-center dark:bg-[#18181b] dark:text-white drop-shadow-md'>
        
        <HiMenu className="lg:hidden size-8 mr-4" onClick={toggleSidebarVisibility}/>
        <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />

        <div className=""><Link to='/'><img className="w-10 h-10 lg:w-16 lg:h-16 mr-6" src={storeLogo} alt='logo'/></Link></div>

        <ProductsNav />

        <OtherNav />

      </header>
    </>
  )
}

export default Header;