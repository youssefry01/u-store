import { Link } from 'react-router-dom';
import storeLogo from "../../assets/storeLogo.png";
import ProductsNav from "./ProductsNav";
import OtherNav from "./OtherNav";
import { HiMenu } from "react-icons/hi";

const Header = () => {

  return (
    <header className='flex bg-white border-black z-[9999] border-opacity-10 border-b h-20 justify-center items-center p-4 dark:bg-[#18181b] dark:text-white drop-shadow-md'>

      <HiMenu className="lg:hidden"/>

      {/* <div className=""><Link to='/'><img className="w-18 h-16 lg:w-20 lg:h-18 mr-6" src={storeLogo} alt='logo'/></Link></div> */}
      <div className=""><Link to='/'><img className="w-16 h-16 lg:w-18 lg:h-18 mr-6" src={storeLogo} alt='logo'/></Link></div>

      <ProductsNav />

      <OtherNav />   

    </header>
  )
}

export default Header;