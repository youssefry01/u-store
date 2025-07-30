import Loading from '../General/Loading';
import { useGetProductByIdQuery } from '../../features/products/productsApiSlice';
import { format } from "date-fns";


const Order = ({ orders, order }) => {
    const { data: product, isLoading, isSuccess } = useGetProductByIdQuery(order.productId, 'product', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });

    let prodIcon;
    try {
      prodIcon = require(`../../assets/${product.category}/prodIcon.png`);
     } catch (error) {
      prodIcon = require(`../../assets/unknown.png`);
     }
    
    if (isLoading) return <Loading />

  return (
    <div className="flex flex-wrap items-center m-2 gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5">    
        <img src={ prodIcon } className={`size-10 mr-4 ${product.category === 'valorant' ? 'bg-black rounded-full dark:bg-none ' : '' }`} alt={product.name} />
        <dl className="w-1/2 sm:w-48">
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Product:</dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                <p className="hover:underline" >{product.amount} {product.currency}</p>
            </dd>
        </dl>

        <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Purchase Date:</dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{format(new Date(order.createdAt), "PPpp")}</dd>
        </dl>

        <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{order.price}EGP</dd>
        </dl>

        <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Your Code:</dt>
            <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            {order.code}
            </dd>
        </dl>
    </div>
  )
}

export default Order