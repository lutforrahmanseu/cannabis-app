import React from "react";
import "./CardInformation.css";
const CardInformation = ({ card }) => {
  console.log(card);
  return (
    <div>
      <div>
        <div>
          <img alt="" />
        </div>
      </div>
      <div>Likha</div>
      <div>card1</div>
      <div>Card2</div>
      <div>card3</div>
      <div>card4</div>
    </div>
  );
};

export default CardInformation;
