const axios = require("axios");

const PAYMOB_API_KEY = process.env.PAYMOB_API_KEY;
const INTEGRATION_ID = '4936235';

const createPaymobOrder = async (req, res) => {
  const { user, product, code } = req.body;

  const amount = product.price;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount provided." });
  }

  try {
    const authResponse = await axios.post("https://accept.paymob.com/api/auth/tokens", {
      api_key: PAYMOB_API_KEY,
    });

    const authToken = authResponse.data.token;

    const orderResponse = await axios.post(
      "https://accept.paymob.com/api/ecommerce/orders",
      {
        auth_token: authToken,
        delivery_needed: "false",
        amount_cents: amount * 100,
        currency: "EGP",
        item: {name: product.category, amount: product.amount, price: product.price},
      }
    );

    const orderId = orderResponse.data.id;

    // Step 3: Generate payment key
    const paymentKeyResponse = await axios.post(
      "https://accept.paymob.com/api/acceptance/payment_keys",
      {
        auth_token: authToken,
        amount_cents: amount * 100,
        currency: "EGP",
        expiration: 3600,
        order_id: orderId,
        billing_data: {
          apartment: "NA",
          email: user.email,
          floor: "NA",
          first_name: user.username,
          street: "NA",
          building: "NA",
          phone_number: "0123456789",
          shipping_method: "NA",
          postal_code: "NA",
          city: "Cairo",
          country: "EG",
          last_name: user.username,
          state: "NA",
        },
        integration_id: INTEGRATION_ID,
        redirect_url: `http://localhost:3000/payment-redirect?orderDetails=${encodeURIComponent(JSON.stringify({ user, product, code }))}`,
      }
    );

    const paymentKey = paymentKeyResponse.data.token;

    return res.status(200).json({
      success: true,
      orderId,
      paymentKey,
      iframeUrl: `https://accept.paymob.com/api/acceptance/iframes/896267?payment_token=${paymentKey}`,
    });
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to create order." });
  }
};

module.exports = { createPaymobOrder };