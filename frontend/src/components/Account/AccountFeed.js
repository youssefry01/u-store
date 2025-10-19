import { useGetOrdersByUserIdQuery } from '../../features/orders/ordersApiSlice';
import Loading from '../General/Loading';
import { FaRegEdit } from "react-icons/fa";
import AccountNav from './AccountNav';
import AccountDetails from './AccountDetails';
import Order from './Order';

const AccountFeed = ({ user }) => {
   const pfp = require('../../assets/profile-user.png');
   
   const { data: orders, isLoading, isSuccess } = useGetOrdersByUserIdQuery(user.id, 'orders', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
    if (isLoading) return <Loading />

  return (
    <div className="flex w-full bg-white dark:bg-gray-900 md:py-8">
        <div className="flex flex-col w-full mx-auto my-4 lg:my-0 max-w-screen-lg px-4 2xl:px-0 ">

            <div className='flex flex-row justify-between'>
                <AccountNav />
                <button type="button" className="flex h-8 lg:h-10 px-4 lg:px-8 items-center rounded-lg text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <FaRegEdit className='mr-2' />
                Edit your data
                </button>
            </div>
            
            <div className="flex flex-col w-full mt-4">

                <div className="flex flex-col lg:flex-row w-full justify-around lg:items-center rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">

                        <div className='flex flex-row my-2 lg:my-0 justify-center items-center'>
                            <img className="h-16 w-16 rounded-lg m-2" src={pfp} alt={user.username} />
                            <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">@{user.username}</h2>
                        </div>
                        
                        <dl className="my-2 lg:my-0">
                            <dt className="font-semibold text-gray-900 dark:text-white">Username</dt>
                            <dd className="text-gray-500 dark:text-gray-400">{user.username}</dd>
                        </dl>

                        <dl className="my-2 lg:my-0">
                            <dt className="font-semibold text-gray-900 dark:text-white">Email Address</dt>
                            <dd className="text-gray-500 dark:text-gray-400">{user.email}</dd>
                        </dl>

                        <dl className='my-2 lg:my-0'>
                            <dt className="font-semibold text-gray-900 dark:text-white">Password</dt>
                            <dd className="text-gray-500 dark:text-gray-400">************</dd>
                        </dl>
                </div>

                <AccountDetails orders={orders} user={user} />
            </div>

            <div className='flex flex-col w-full'>
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">Latest orders</h2>
                <div className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">          
                    {isSuccess && orders.map( (order, id) => (<Order key={id} orders={orders} order={order} />))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountFeed;