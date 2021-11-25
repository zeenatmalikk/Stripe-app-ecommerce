import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY = "pk_test_51JmYLkSBnPjkDaqT5sdhumPnzSa73EcG1Gw217GK9OHqqvJ7fwuXsFjSm2NXLiBsMrBklfeAaqBj3i4cQDUq0MRV00zBDbiUcH"

const Pay = () => {
  const [stripeToken, setstripeToken] = useState(null);

  
  const onToken = (token) => {
    setstripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      {/* <button
        style={{
          height: "50px",
          width: "200px",
          backgroundColor: "black",
          color: "wheat",
        }}
      > */}
      <StripeCheckout
        name="zeenat shop"
        image="https://p.kindpng.com/picc/s/478-4786959_picture-super-junior-logo-png-transparent-png.png"
        billingAddress
        shippingAddress
        description="your total is 20$"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>Pay</button>
        {/* <a href="/success">Pay</a> */}
      </StripeCheckout>
      {/* </button> */}
    </div>
  );
};

export default Pay;
