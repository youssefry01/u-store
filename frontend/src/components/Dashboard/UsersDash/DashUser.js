import React from 'react';
import { useState } from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import DeleteUser from './DeleteUser';

const DashUser = ({ user }) => {
    const [showDeleteUserConfirmation, setShowDeleteUserConfirmation] = useState(false);
    // const [isEditing, setIsEditing] = useState(null);

    const handleDeleteUser = () => {
        setShowDeleteUserConfirmation(true);
    };

    return (
    <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">

        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{user.id}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{user.username}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{user.email}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{user.password}</td>
        <td className="text-md whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{user.roles}</td>

        <td className="text-md whitespace-no-wrap text-red-400 tracking-normal leading-4 cursor-pointer hover:text-red-600" onClick={handleDeleteUser} ><HiOutlineTrash className="size-5" /></td>

        {/* Delete User Modal */}
        {showDeleteUserConfirmation && (
          <DeleteUser user={user} setShowDeleteUserConfirmation={setShowDeleteUserConfirmation}  />
        )}

    </tr>
    )
}

export default DashUser;