import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendLogoutMutation } from '../../features/auth/authApiSlice';
import Loading from '../General/Loading';

const UserDropdown = ({ user }) => {
  const navigate = useNavigate();

  const [sendLogout, { isLoading, isSuccess }] = useSendLogoutMutation()

  const handleLogout = () => {
    sendLogout();
    navigate('/');
  }

  useEffect(() => {
      if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <Loading />

  const itemClass = 'block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'

  return (
    <div className='flex flex-col absolute top-10 -left-6 mt-2 gap-2 bg-clip-content bg-white w-32 rounded-lg border-b border-gray-500 border dark:bg-neutral-800 dark:border-gray-600 dark:text-white'>
        <div className="absolute -top-2 left-14 w-4 h-4 bg-white border-t-2 border-l-2 border-gray-500 dark:border-gray-600 dark:bg-neutral-800 rotate-45 z-0"></div>
        <ul className='z-10'>
            {user && <li className={`${itemClass} rounded-t-lg z-auto`} onClick={() => navigate('/account')}>Account</li>}
            {!user && <li className={itemClass} onClick={() => navigate('/register')}>Sign up</li>}
            {user && <li className={`${itemClass} rounded-b-lg`} onClick={handleLogout}>Logout</li>}
        </ul>
    </div>
  )
}

export default UserDropdown;