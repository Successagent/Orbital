import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackIntegration = () => {
  const publicKey = "pk_test_cfdb751a4bbe79031d2de7788fe8238f107543e6";
  const amount = 1000000;
  const [email, setEmail] = useState("harison@gmail.com");
  const [name, setName] = useState("Success");
  const [phone, setPhone] = useState("08124885952");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <div>
      {/* <form>
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </form> */}
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackIntegration;
