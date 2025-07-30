import CategoryInfo from './CategoryInfo.js';
import PurchaseFeed from './PurchaseFeed.js';
import Missing from '../General/Missing.js';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const CategoryFeed = ({ category, products, categoryName }) => {
  const [iframeUrl, setIframeUrl] = useState("");

  if (!category) {
    return <Missing msg={'Error'} msg2="Category Not Found" />;
  }

  return (
    <div className='flex w-full flex-wrap lg:flex-nowrap'>

          {iframeUrl && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <IoMdClose className='absolute top-32 right-1/3 size-12 cursor-pointer' onClick={() => setIframeUrl("")} />
              <iframe src={iframeUrl} title="Paymob Payment" className="w-full h-full border rounded" scrolling='false' />
            </div>
          )}

      <CategoryInfo category={category} categoryName={categoryName} />

      <PurchaseFeed category={category} products={products} categoryName={categoryName} setIframeUrl={setIframeUrl} />
      
    </div>    
  )
}

export default CategoryFeed;