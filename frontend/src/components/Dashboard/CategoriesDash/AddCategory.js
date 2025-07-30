import { useState, useEffect } from 'react';
import { useAddNewCategoryMutation } from "../../../features/categories/categoriesApiSlice";
import { useNavigate } from 'react-router-dom';

const AddCategory = ({ setShowAddCategory }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [addNewCategory, { isLoading, isSuccess, isError, error }] = useAddNewCategoryMutation()

    useEffect(() => {
        if (isSuccess) {
            setName('')
            setTitle('')
            setDescription('')
            navigate('/dash')
        }
    }, [isSuccess, navigate])

    const canSave = [name, title, description].every(Boolean) && !isLoading

    const handleSubmitNewCategory = async (e) => {
        e.preventDefault();
        if (canSave) {
            await addNewCategory({ name: name, title, description})
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full z-60">
                <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Category Name" 
                    className="border p-2 mb-4 w-full"
                />
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Title" 
                    className="border p-2 mb-4 w-full"
                />
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Description" 
                    className="border p-2 mb-4 w-full"
                />
                <div className="flex justify-end">
                    <button 
                        onClick={handleSubmitNewCategory}
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Add
                    </button>
                    <button 
                        onClick={() => setShowAddCategory(false)} 
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

export default AddCategory;