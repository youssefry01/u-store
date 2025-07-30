import { useEffect } from "react";
import { useDeleteUserMutation } from "../../../features/users/usersApiSlice";

const DeleteUser = ({ category, user, setShowDeleteUserConfirmation }) => {

    const [deleteUser, { isSuccess, isError, error }] = useDeleteUserMutation()

    useEffect(() => {
        if (isSuccess) {
            setShowDeleteUserConfirmation(false)
        }
    }, [isSuccess, setShowDeleteUserConfirmation])

    const handleConfirmDeleteUser = async () => {
        await deleteUser({ id: user.id })
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete the user "{user.username}" ?</p>
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={handleConfirmDeleteUser}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => setShowDeleteUserConfirmation(false)} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
                <p className={isError ? "inline-block bg-white text-[firebrick] p-[0.25em] mb-[0.5em]" : "offscreen"}>{error?.data?.message}</p>
            </div>
        </div>
    )
}

export default DeleteUser;