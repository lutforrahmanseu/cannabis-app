import React from "react";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import logo from "../../cannabis.png";
import ViewDetails from "../ViewDetails/ViewDetails";

const AddNew = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <div>
          <img src={logo} className=" logo-img" alt="" />
          <button className="grower-button">Grower</button>
        </div>
        <div>
          <Menu />
        </div>
      </div>

      <div className="right-side">
        <Navbar></Navbar>
        <ViewDetails></ViewDetails>
      </div>
    </div>
  );
};

export default AddNew;
