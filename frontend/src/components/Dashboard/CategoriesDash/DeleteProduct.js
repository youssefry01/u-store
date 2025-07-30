import { useEffect } from "react";
import { useDeleteProductMutation } from "../../../features/products/productsApiSlice";

const DeleteProduct = ({ category, product, setShowDeleteProductConfirmation }) => {

    const [deleteProduct, { isSuccess, isError, error }] = useDeleteProductMutation()

    useEffect(() => {
        if (isSuccess) {
            setShowDeleteProductConfirmation(false)
        }
    }, [isSuccess, setShowDeleteProductConfirmation])

    const handleConfirmDeleteProduct = async () => {
        await deleteProduct({ id: product.id })
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete the product "{product.name}" ?</p>
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={handleConfirmDeleteProduct}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={() => setShowDeleteProductConfirmation(false)} 
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

export default DeleteProduct;