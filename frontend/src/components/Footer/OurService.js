import React from 'react';
import { MdPriceCheck } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaStopwatch } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";


const OurService = () => {
  return (
    <div className="flex flex-wrap w-full p-4 lg:p-10 lg:pl-24 border-black border-opacity-10 border-b lg:flex-nowrap lg:items-center lg:justify-between dark:border-white dark:border-opacity-10">

    <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-black border-opacity-10 lg:border-r dark:border-white dark:border-opacity-10">
      <div className="flex lg:flex-row">
        <MdPriceCheck className="w-14 h-14 text-black dark:text-white"/>
        <div className="ml-4">
          <h1 className="text-black font-JosefinSans text-xl font-normal mb-1 dark:text-white">Best Prices</h1>
          <p className="text-gray-400 font-JosefinSans text-lg font-normal dark:text-gray-400">Best Deals For You.</p>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-black border-opacity-10 lg:border-r dark:border-white dark:border-opacity-10">
      <div className="flex lg:flex-row">
        <RiSecurePaymentFill className="w-14 h-14 text-black dark:text-white"/>
        <div className="ml-4">
          <h1 className="text-black font-JosefinSans text-xl font-normal mb-1 dark:text-white">Convenient Methods</h1>
          <p className="text-gray-400 font-JosefinSans text-lg font-normal dark:text-gray-400">Very Secure Payments.</p>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-black border-opacity-10 lg:border-r dark:border-white dark:border-opacity-10">
      <div className="flex lg:flex-row">
        <FaStopwatch className="w-14 h-14 text-black dark:text-white"/>
        <div className="ml-4">
          <h1 className="text-black font-JosefinSans text-xl font-normal mb-1 dark:text-white">Instant Delivery</h1>
          <p className="text-gray-400 font-JosefinSans text-lg font-normal dark:text-gray-400">Directly After Payment.</p>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-[20%] ">
      <div className="flex lg:flex-row">
        <BiSupport className="w-14 h-14 text-black dark:text-white"/>
        <div className="ml-4">
          <h1 className="text-black font-JosefinSans text-xl font-normal mb-1 dark:text-white">Fast Response</h1>
          <p className="text-gray-400 font-JosefinSans text-lg font-normal dark:text-gray-400">Always Available To Assist You.</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default OurService;