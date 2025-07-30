import Copyright from "./Copyright";
import OurService from "./OurService";
import FooterNav from "./FooterNav";


const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-col bg-white w-full m-auto dark:bg-neutral-900'>

      <OurService />

      <FooterNav />

      <Copyright />

    </footer> 
  )
}

export default Footer;