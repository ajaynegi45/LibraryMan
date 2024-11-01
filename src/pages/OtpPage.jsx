import React, { useState } from "react";
import "../assets/styles/OtpPage.css";

const OtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") { 
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.querySelectorAll(".otp-input")[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.querySelectorAll(".otp-input")[index - 1].focus();
      }
    }
  };

  return (
    <div className="otp-container">
      <h1>One-Time Password</h1>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="otp-input"
            value={value}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <p>Please enter the one-time password sent to your mail.</p>
      <button className="otp-submit">Submit</button>
    </div>
  );
};

export default OtpPage;
