import React from "react";
import "./CardInformation.css";
const CardInformation = ({ card }) => {
  const {
    name,
    info,
    img,
    price,
    ask,
    icon,
    btnIcon,
    thc,
    cbd,
    percent,
    percent1,
  } = card;

  return (
    <div className="card-information">
      <div className="img-card gap-4">
        <img src={img} className="w-36 my-5 " alt="" />
        <div>
          <p>{name}</p>
          <p>{info}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between align-middle">
          <span>{thc}</span>
          <span>{percent}</span>
        </div>
        <div>
          <progress
            className="progress progress-success w-56"
            value="40"
            max="100"
          ></progress>
        </div>
        <div className="flex justify-between">
          <span>{cbd}</span>
          <span>{percent1}</span>
        </div>
        <div>
          <progress
            className="progress progress-success w-56"
            value="40"
            max="100"
          ></progress>
        </div>
      </div>
      <div>
        <p>{ask}</p>
        <p>{price}</p>
      </div>
      <div className="awarded">
        <img src={icon} alt="" />
        <p>Close</p>
      </div>
      <div className="flex flex-col justify-center align-middle">
        <button className="btn-icons">
          <img src={btnIcon} alt="" />
          <p> Bid</p>
        </button>
        <button className="view">View</button>
      </div>
    </div>
  );
};

export default CardInformation;
