import React from 'react'
import { Link, useLocation } from "react-router-dom";

const DashSideBar = () => {
    const { pathname } = useLocation()
  return (
    <aside className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col items-center -mx-2">
            <p className="mx-2 mt-2 text-2xl font-medium text-gray-800 dark:text-gray-200">Admin Dashboard</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <Link to={'/dash'} className={`flex items-center px-4 py-2 mx-4 font-medium text-gray-700  rounded-lg  dark:bg-gray-800 dark:text-gray-200 ${pathname === '/dash/users' ? "text-gray-600 " : "bg-gray-100"}`}>
                Categories
                </Link>

                <Link to={'/dash/users'} className={`flex items-center px-4 py-2 mt-5 mx-4 font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${pathname === '/dash/users' ? "text-gray-700 bg-gray-100" : ""}`}>
                Users
                </Link>
            </nav>
        </div>
    </aside>
  )
}

export default DashSideBar