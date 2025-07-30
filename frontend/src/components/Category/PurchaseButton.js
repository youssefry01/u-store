import { useState } from "react";

const PurchaseButton = ({ user, product, code, canPay, setIframeUrl }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const initiatePayment = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch('http://localhost:3500/create-paymob-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, product, code }),
        });
  
        const data = await response.json();
        console.log(data);
        if (!response.ok) throw new Error(data.error || "Failed to create order");
  
        setIframeUrl(data.iframeUrl);
      } catch (err) {
        setError("Failed to create the payment. Please try again.");
        throw err;
      } finally {
        setLoading(false);
      }
    };
    
  return (
    <div className='flex flex-col justify-center items-center w-full mt-6 '>

     <button onClick={initiatePayment} className={`bg-violet-900 text-center text-xl text-white rounded-2xl h-12 w-1/4 font-semibold select-none ${loading || !canPay ? 'opacity-50 cursor-not-allowed' : 'opacity-100 pointer-events-auto'}`} disabled={loading || !canPay} >
     {loading ? "Processing..." : "Complete Purchase"}
     </button>
    
     {error && <p className="text-red-500 mt-4">{error}</p>}

    </div>
  )
}

export default PurchaseButton;