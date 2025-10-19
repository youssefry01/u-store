import { useState, useRef, useEffect } from 'react';
import Search from './Search';
import ThemeButton from "./ThemeButton";
import { GoTriangleDown } from "react-icons/go";
import useAuth from "../../hooks/useAuth"
import UserDropdown from './UserDropdown';
import { Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../features/users/usersApiSlice';

const OtherNav = () => {
  const { id } = useAuth()
  const { data: user, isLoading } = useGetUserByIdQuery(id, 'user', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center ml-auto lg:ml-0'>

      <Search />

      <div className='flex relative group mr-6' onClick={() => setDropdownVisible((prev) => !prev)} ref={dropdownRef}>

        <div className='flex items-center p-4 lg:w-[95.5px] w-[90px] text-[11px] h-[30px] gap-2 lg:text-[13px] leading-[20px] lg:font-medium appearance-none rounded-[15px] border border-solid z-0 border-[rgb(232,_237,_235)] hover:cursor-pointer focus:cursor-pointer'>
        {isLoading ? '...' : user ? (<p>{user.username}</p>) : <Link to='login' onClick={() => setDropdownVisible(false)}>Sign in</Link>}
          <GoTriangleDown />
        </div>

        {dropdownVisible && <UserDropdown user={user} />}

      </div>

      <ThemeButton />

    </div>
  )
}

export default OtherNav;