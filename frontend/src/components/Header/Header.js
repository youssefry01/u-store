import { Link } from 'react-router-dom';
import storeLogo from "../../assets/storeLogo.png";
import ProductsNav from "./ProductsNav";
import OtherNav from "./OtherNav";
import { HiMenu } from "react-icons/hi";
import { TEAlert } from "tw-elements-react";

const Header = () => {

  return (
    <>
      <header className='flex bg-white border-black z-[9999] border-opacity-10 border-b h-20 justify-center items-center p-4 dark:bg-[#18181b] dark:text-white drop-shadow-md'>

        <HiMenu className="lg:hidden"/>

        {/* <div className=""><Link to='/'><img className="w-18 h-16 lg:w-20 lg:h-18 mr-6" src={storeLogo} alt='logo'/></Link></div> */}
        <div className=""><Link to='/'><img className="w-16 h-16 lg:w-18 lg:h-18 mr-6" src={storeLogo} alt='logo'/></Link></div>

        <ProductsNav />

        <OtherNav />

      </header>

      <div className="flex bg-white dark:bg-[#18181b] h-14">
        <TEAlert staticAlert open={true} color="bg-warning-100 dark:bg-yellow-800 text-warning-800 dark:text-yellow-200 h-full" className="flex justify-center tracking-wide">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <strong className='mr-2'>Disclaimer:  </strong>
          This website is a demo project. Do not attempt to purchase anything — no real transactions or deliveries will occur.
        </TEAlert>
      </div>
    </>
  )
}

export default Header;