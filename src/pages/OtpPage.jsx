import React from "react";
import "../assets/styles/OtpPage.css";

const OtpPage = () => {
  return (
    <div className="otp-container">
      <h1>One-Time Password</h1>
      <div className="otp-inputs">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="otp-input"
          />
        ))}
      </div>
      <p>Please enter the one-time password sent to your mail.</p>
      <button className="otp-submit">Submit</button>
    </div>
  );
};

export default OtpPage;
