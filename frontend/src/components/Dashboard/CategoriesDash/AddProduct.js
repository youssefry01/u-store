import { useState, useEffect } from 'react';
import { useAddNewProductMutation } from '../../../features/products/productsApiSlice';

const AddProduct = ({ setShowAddProduct, categoryName }) => {
    
    const [addNewProduct, { isLoading, isSuccess, isError, error }] = useAddNewProductMutation()

    const [name, setName] = useState("");
    const category = categoryName;
    const [amount, setAmount] = useState("");
    const [stock, setStock] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        if (isSuccess) {
            setName('')
            setAmount('')
            setStock('')
            setPrice('')
        }
    }, [isSuccess])

    const canSave = [name, category, amount, stock, price].every(Boolean) && !isLoading

    const handleSubmitNewProduct = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewProduct({ name, category, amount, stock, price })
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full z-40">
                <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Product Name" 
                    className="border p-2 mb-4 w-full"
                />
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Product Amount" 
                    className="border p-2 mb-4 w-full"
                />
                <input 
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                    placeholder="Product Stock" 
                    className="border p-2 mb-4 w-full"
                />
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder="Product Price" 
                    className="border p-2 mb-4 w-full"
                />
                <div className="flex justify-end">
                    <button 
                        onClick={handleSubmitNewProduct}
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Add
                    </button>
                    <button 
                        onClick={() => setShowAddProduct(false)} 
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

export default AddProduct;