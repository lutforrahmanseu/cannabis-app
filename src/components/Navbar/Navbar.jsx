import React from "react";
import Ellipse from "../../assets/Ellipse 18.png";
import logOut from "../../assets/logOut.png";
import chat from "../../assets/chat.png";
import bellButton from "../../assets/bellButton.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <p>Auction / All Auction</p>
      </div>

      <div className="pic-container">
        <img src={bellButton} className="icon-dot" alt="" />
        <img src={chat} alt="" />
        <img src={Ellipse} alt="" />
        <img src={logOut} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
