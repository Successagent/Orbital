import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const PaystackIntegration = () => {
  const publicKey = "pk_test_cfdb751a4bbe79031d2de7788fe8238f107543e6";
  const amount = 1000000;
  const [email, setEmail] = useState("harison@gmail.com");
  const [name, setName] = useState("Success");
  const [phone, setPhone] = useState("08124885952");

  return <div></div>;
};

export default PaystackIntegration;
