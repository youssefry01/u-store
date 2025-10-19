import React from 'react';
import { FaCcVisa } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const FooterNav = () => {
  const navigate = useNavigate();
  const headingStyle = "text-black font-JosefinSans text-lg font-normal mb-1 dark:text-white";
  const childStyle = "text-gray-400 font-JosefinSans font-normal hover:cursor-pointer focus:cursor-pointer hover:underline focus:underline mb-2 dark:text-gray-400";
  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between lg:items-center ">

    <div className="lg:w-1/4 py-12 w-full">
      <ul className="flex justify-center">
        <a href="https://instagram.com/youssefry01"><li><FaInstagram className="text-black w-10 h-10 mx-3 dark:text-white" /></li></a>
        <a href="https://www.linkedin.com/in/youssefry/"><li><FaLinkedin className="text-black w-10 h-10 mx-3 dark:text-white" /></li></a>
      </ul>
    </div>

    <div className="flex flex-col p-8 lg:w-1/4 items-center w-full">
        <ul className=''>
          <li className="text-black font-JosefinSans text-lg font-normal mb-2 dark:text-white">Contact Us</li>

          <li className='flex flex-row justify-center items-center text-gray-400 font-JosefinSans font-normal mb-2'>
            <MdOutlineEmail className='text-black w-5 h-5 mr-2 dark:text-white'/>
            youssefry01@gmail.com
          </li>

          <li className='flex flex-row justify-start items-center text-gray-400 font-JosefinSans font-normal mb-2'>
            <FaPhone className='text-black w-4 h-4 mr-1 dark:text-white'/>
            +20 123 456 7890
          </li> 

          <li className={childStyle}>Contact Support</li>
        </ul>
    </div>
    
    <div className="flex flex-col lg:w-1/4 p-8 items-center w-full">
        <ul>
          <li className={headingStyle}>Ustore</li>
          <li className={childStyle} onClick={() => navigate('/account')}>Account</li>
          <li className={childStyle}>Refund Policy</li>
          <li className={childStyle}>Privacy Policy</li>
          <li className={childStyle}>Terms & Conditions</li>
        </ul>
    </div>

    <div className="lg:w-1/4 py-12 w-full">
      <ul className="flex justify-center">
        <li><FaCcVisa className="text-black w-10 h-10 mx-3 dark:text-white" /></li>
        <li><SiPaypal className="text-black w-10 h-10 mx-3 dark:text-white" /></li>
        <li><FaCcMastercard className="text-black w-10 h-10 mx-3 dark:text-white" /></li>
      </ul>
    </div>

  </div>
  )
}

export default FooterNav;