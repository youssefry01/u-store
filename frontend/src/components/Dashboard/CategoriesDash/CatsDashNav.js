import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";

const CategoriesDashNav = ({ categories, category, categoryName }) => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showDeleteCategoryConfirmation, setShowDeleteCategoryConfirmation] = useState(false);

    const handleAddCategory = () => {
        setShowAddCategory(true);
    };
    
    const handleDeleteCategory = () => {
        setShowDeleteCategoryConfirmation(true);
    };

  return (
    <>
        <div className="flex w-full items-center h-16 bg-gray-200 me-2">

            {categories.map( (cat, id) => (
            <Link key={id} to={`/dash/${cat.name}`} aria-current="page" className={`p-4 w-24 ${categoryName === cat.name ? 'text-blue-600 bg-gray-200 rounded-t-lg dark:bg-gray-800 dark:text-blue-500' : ''}`} >{cat.title}</Link>
            ))}

            <div className="mx-2 lg:ml-auto items-center">
                <button onClick={handleAddCategory} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-700 hover:bg-green-600 focus:outline-none rounded text-sm font-medium leading-none text-white">
                    Add Category
                </button>

                <button onClick={handleDeleteCategory} disabled={!categoryName} className={`inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-red-700 hover:bg-red-600 focus:outline-none rounded text-sm font-medium leading-none text-white ${!categoryName ? 'opacity-50' : ''}`}>
                    Delete {category?.title || "Category"}
                </button>
            </div>

        </div>

        {/* Add Category Modal */}
        {showAddCategory && (
        <AddCategory setShowAddCategory={setShowAddCategory} />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteCategoryConfirmation && (

        <DeleteCategory category={category} setShowDeleteCategoryConfirmation={setShowDeleteCategoryConfirmation} />
        )}
    </>
  )
}

export default CategoriesDashNav