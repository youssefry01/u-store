import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const location = useLocation();
  const titleStyle = 'font-JosefinSans font-normal text-lg m-4 text-black dark:text-white';
  const activeLinkStyle = 'text-blue-500'; // New style for active link

  return (
    <>
    {isSidebarVisible && (
      <div className="fixed top-full left-0 z-50 w-64 h-screen p-4 overflow-y-auto overflow-x-clip  bg-white dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <ul className='flex flex-col justify-center items-center text-black font-JosefinSans font-normal'>
            <li className={titleStyle} ><Link to='amazon' className={`${titleStyle} ${location.pathname === '/amazon' ? activeLinkStyle : ''}`}>Amazon</Link> </li>
            <li className={titleStyle} ><Link to='netflix' className={`${titleStyle} ${location.pathname === '/netflix' ? activeLinkStyle : ''}`}>Netflix</Link> </li>
            <li className={titleStyle} ><Link to='steam' className={`${titleStyle} ${location.pathname === '/steam' ? activeLinkStyle : ''}`}>Steam</Link> </li>
            <li className={titleStyle} ><Link to='playstation' className={`${titleStyle} ${location.pathname === '/playstation' ? activeLinkStyle : ''}`}>Playstation</Link> </li>
            <li className={titleStyle} ><Link to='apple' className={`${titleStyle} ${location.pathname === '/apple' ? activeLinkStyle : ''}`}>Apple</Link> </li>
            <li className={titleStyle} ><Link to='xbox' className={`${titleStyle} ${location.pathname === '/xbox' ? activeLinkStyle : ''}`}>Xbox</Link> </li>
        </ul>
      </div>
    )}
    </>
  );
};

export default Sidebar;
