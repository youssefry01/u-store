import { useState } from "react";
import AddProduct from "./AddProduct";

const ProductsDashNav = ({ products, categoryName}) => {
    const [showAddProduct, setShowAddProduct] = useState(false);

    const handleAddProduct = () => {
        setShowAddProduct(true);
    };

    return (
        <div className="flex flex-col w-full lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch">

            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                <div className="lg:ml-6 flex items-center">
                    <button onClick={handleAddProduct} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded text-sm font-medium leading-none text-white">Add Product</button>
                </div>
            </div>

            {/* Add Product Modal */}
            {showAddProduct && (
                <AddProduct setShowAddProduct={setShowAddProduct} categoryName={categoryName} />
            )}
            
        </div>
    )
}

export default ProductsDashNav;