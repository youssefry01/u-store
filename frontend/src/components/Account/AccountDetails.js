import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { format } from "date-fns";

const AccountDetails = ({ orders, user }) => {

  return (
    <div className='flex flex-col w-full my-6'>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">General overview</h2>

        <div className='flex flex-col lg:flex-row w-full border-b border-t border-gray-200 py-4 dark:border-gray-700'>
            
            <div className='flex flex-col mx-10 my-6 lg:my-0 w-full'>
                <FaRegUser className='mb-2 h-8 w-8 text-gray-400 dark:text-gray-500' />
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Account Created</h3>
                <span className="flex items-center text-xl font-bold text-gray-900 dark:text-white">{format(new Date(user.createdAt), "PPpp")}</span>
            </div>
                <div className='flex flex-col mx-10 my-6 lg:my-0 w-full'>
                <MdUpdate className='mb-2 h-8 w-8 text-gray-400 dark:text-gray-500' />
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Last Updates</h3>
                <span className="flex items-center text-xl font-bold text-gray-900 dark:text-white">{format(new Date(user.updatedAt), "PPpp")}</span>
            </div>
                <div className='flex flex-col mx-10 my-6 lg:my-0 w-full'>
                <IoCartOutline className='mb-2 h-8 w-8 text-gray-400 dark:text-gray-500' />
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Orders made</h3>
                <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">{orders ? orders.length : 0}</span>
            </div>
        </div>
    </div>
  )
}

export default AccountDetails