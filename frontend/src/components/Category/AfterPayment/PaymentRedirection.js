import Loading from "../../General/Loading"
import { useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import { useUpdateProductMutation } from '../../../features/products/productsApiSlice.js';

const PaymentRedirection = () => {
  const [updateProduct] = useUpdateProductMutation()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const success = searchParams.get("success");
  const orderDetailsString = searchParams.get("orderDetails");

  let orderDetails = null;
  if (orderDetailsString) {
    try {
      orderDetails = JSON.parse(decodeURIComponent(orderDetailsString));
      orderDetails = {...orderDetails, success}
    } catch (error) {
      console.error("Error parsing order details:", error);
    }
  }
  console.log(orderDetails)
  const { user, product, code } = orderDetails;
  
  // eslint-disable-next-line
  const createOrder = async () => {
    const updatedCodes = product.codes.slice(0, -1);
    try {
        const response = await fetch("http://localhost:3500/orders/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user,
                product,
                code,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            const updatedProduct = {...product, codes: updatedCodes, sold: product.sold + 1};
            console.log(updateProduct)

            try {
                await updateProduct(updatedProduct).unwrap();
                console.log(`Selected and removed last code: ${code}`);
                return result;
            } catch (error) {
                console.error('Failed to update the product:', error);
                throw error;
            }
        } else {
            console.error(`Order creation failed: ${result.message}`);
            throw new Error(result.message);
        }
    } catch (error) {
      console.error('Failed to create the order:', error);
      throw error;
    }
  };

  const handleCreateOrder = useCallback(() => {
    createOrder();
    navigate("/payment-status", { state: orderDetails });
  }, [createOrder, navigate, orderDetails]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCreateOrder();
    }, 1000);

    return () => clearTimeout(timer);
  }, [handleCreateOrder]);

  return (
    <Loading />
  )
}

export default PaymentRedirection