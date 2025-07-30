import React from 'react';

const DashProdsHead = () => {

    return (
        <thead>

            <tr className="py-8 w-full h-10 border-gray-300 dark:border-gray-200 border-b">

                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Id</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Name</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Amount</th>
                <th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Stock</th>
                <td className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Sold</td>
                <td className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">Price</td>
                <td className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4"> </td>

            </tr>

        </thead>
    )
}

export default DashProdsHead;