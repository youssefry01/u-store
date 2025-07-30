import AmountField from './AmountField.js';
import PurchaseButton from './PurchaseButton.js';
import { useSelector } from 'react-redux';
import { useGetUserByIdQuery } from '../../features/users/usersApiSlice';
import useAuth from '../../hooks/useAuth.js';

const PurchaseFeed = ({ category, products, categoryName, setIframeUrl }) => {
  const { id } = useAuth()
  const { data: user } = useGetUserByIdQuery(id, 'user', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });

  const selectedPrice = useSelector((state) => state.purchase.selectedPrice);
  const selectedPayment = useSelector((state) => state.purchase.selectedPayment);
  
  const product = selectedPrice ? products.find(item => item.price === selectedPrice) : null;
  const codes = product ? product.codes : [];
  const code = codes[codes.length - 1]

  const canPay = user && selectedPrice!==0 && selectedPayment!==0;

  return (
    <div className='flex flex-wrap p-10 my-4 mr-10  w-full lg:w-2/3 bg-white rounded-xl dark:bg-[#18181b] drop-shadow-lg'>
          
      <AmountField category={category} products={products} categoryName={categoryName}/>

      <PurchaseButton user={user} product={product} code={code} canPay={canPay} setIframeUrl={setIframeUrl} />

    </div>
  )
}

export default PurchaseFeed;