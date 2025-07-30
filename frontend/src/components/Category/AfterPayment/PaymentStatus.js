import { useLocation, Link } from 'react-router-dom';


const PaymentStatus = () => {

  const location = useLocation();
  const { product, code, success } = location.state || {};


  return (
    <div className="p-6 text-center bg-[#f7f7f8] grow dark:bg-[#0e0e10]">

      {success === "true" && (
        <>
        <h1 className={`text-2xl font-bold text-green-500`}>Payment Approved!</h1>
        <p className="mt-4 dark:text-white">Thank you for your payment. Your order has been processed successfully.</p>

        <div className='flex flex-wrap flex-grow w-full px-4 mb-4'>
        
          <h1 className='flex pb-1 mb-3 text-2xl text-black font-semibold dark:text-white border-black border-opacity-10 border-b dark:border-white dark:border-opacity-10'>{`${product.category.toUpperCase()} code for ${product.amount} points`}</h1>
      
          <div className='flex w-full justify-center items-center py-4 rounded-2xl bg-[#0e0e10] dark:bg-[#f7f7f8] drop-shadow-lg'> 
      
            <div className='flex items-center justify-center w-1/3 h-10 rounded-md border-black border-2 border-opacity-20 pl-2 text-white dark:text-black ' maxLength="320">
              <p>{code}</p>
            </div>
      
          </div>
      
        </div> 
        </>
      )}

      {success !== "true" && (
        <>
        <h1 className={`text-2xl font-bold text-red-500`}>Payment Failed</h1>
        <p className="mt-4 dark:text-white">Sorry, there was an issue with your payment. Please try again.</p>
        <Link to='/' className='text-gray-600 dark:text-white' >Home Page</Link>
        </>
      )}

    </div>
  )
}

export default PaymentStatus