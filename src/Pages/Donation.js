import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./DonationPage.css"; // Create a CSS file (DonationPage.css) for custom styles

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // Replace with your actual Stripe publishable key

const DonationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleDonate = (event) => {
    event.preventDefault();
    // Handle donation submission logic here
    // You can send this information along with the payment details to your server
  };

  return (
    <div className="donation-page">
      <h1>Donate</h1>
      <form onSubmit={handleDonate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationPage;