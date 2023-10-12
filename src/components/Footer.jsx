import React, { useEffect, useState } from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState();
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <footer>
        <div class="final_text"></div>
        <p>Copyright &copy; All rights reserved</p>
        <div className="name">Designed by Ajax Negi, 2023</div>
      </footer>
    </>
  );
};

export default Footer;
