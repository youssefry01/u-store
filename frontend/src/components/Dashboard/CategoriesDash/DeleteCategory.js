import { useEffect } from "react"
import { useDeleteCategoryMutation } from "../../../features/categories/categoriesApiSlice";
import { useNavigate } from "react-router-dom";

const DeleteCategory = ({ category, setShowDeleteCategoryConfirmation }) => {
    const navigate = useNavigate();

    const [deleteCategory, { isSuccess, isError, error }] = useDeleteCategoryMutation()

    useEffect(() => {
        if (isSuccess) {
            navigate('/dash')
            setShowDeleteCategoryConfirmation(false)
        }
    }, [isSuccess, navigate, setShowDeleteCategoryConfirmation])

    const handleConfirmDeleteCategory = async () => {
        await deleteCategory({ id: category.id })
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete the category "{category.name.charAt(0).toUpperCase() + category.name.slice(1)}" ?</p>
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={handleConfirmDeleteCategory}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => setShowDeleteCategoryConfirmation(false)} 
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

export default DeleteCategory;