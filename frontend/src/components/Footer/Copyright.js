import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (

    <div className="flex w-full justify-center items-center border-black border-opacity-10 border-t p-2 dark:border-white dark:border-opacity-10">

      <p className="text-black font-JosefinSans text-lg font-normal dark:text-white"><u>Ustore</u> <span className="text-black text-opacity-60 dark:text-white dark:text-opacity-60"> &copy; {year} Powered By</span> us0f.</p>

    </div>
  )
}

export default Copyright;