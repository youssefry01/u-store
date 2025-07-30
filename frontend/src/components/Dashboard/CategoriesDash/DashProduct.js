import React from 'react';
import { useState } from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import DeleteProduct from './DeleteProduct';

const DashProduct = ({ product }) => {
    const [showDeleteProductConfirmation, setShowDeleteProductConfirmation] = useState(false);
    // const [isEditing, setIsEditing] = useState(null);

    const handleDeleteProduct = () => {
        setShowDeleteProductConfirmation(true);
    };

    return (
    <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">

        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.id}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.name}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.amount}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.stock}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.sold}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{product.price}</td>

        <td className="text-md whitespace-no-wrap text-red-400 tracking-normal leading-4 cursor-pointer hover:text-red-600" onClick={handleDeleteProduct} ><HiOutlineTrash className="size-5" /></td>

        {/* Delete Product Modal */}
        {showDeleteProductConfirmation && (
          <DeleteProduct product={product} setShowDeleteProductConfirmation={setShowDeleteProductConfirmation}  />
        )}

    </tr>
    )
}

export default DashProduct;