import React from 'react'
import ProductsDashNav from './ProdsDashNav'
import DashProdsHead from './DashProdsHead'
import DashProduct from './DashProduct'

const ProductsDashView = ({ products, categoryName }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow rounded">

        <ProductsDashNav products={products} categoryName={categoryName} />

        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">

            <table className="min-w-full mx-6 bg-white dark:bg-gray-800">

                <DashProdsHead />

                <tbody className=''>

                    {products.map((product, id) => (
                        <DashProduct key={id} product={product} />
                    ))}

                </tbody>

            </table>

        </div>
        
    </div>
  )
}

export default ProductsDashView