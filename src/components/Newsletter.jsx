import React, { useState } from "react";
import "../Css/SubscribeSection.css"; // Import your CSS file

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="subscribe-section">
      <div className="text-container">
        <h2>Ready to Get Started !</h2>
        <i>
        Stay updated with the latest news, exclusive offers, and valuable insights. Subscribe to our newsletter and never miss an update! </i>
      </div>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>SUBSCRIBE</button>
      </div>
      {message && <p className="message">{message}</p>}
    </section>
  );
};

export default SubscribeSection;
