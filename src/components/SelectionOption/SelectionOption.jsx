import React from "react";
import CardInformation from "../CardInformation/CardInformation";
import "./SelectionOption.css";
import location from "../../assets/location.png";
import category from "../../assets/category.png";
import price from "../../assets/price.png";
import stater from "../../assets/stater.png";
import cultivation from "../../assets/cultivation.png";
const SelectionOption = ({ card }) => {
  return (
    <div className="card-container">
      <div className="select-info">
        <div className="all-info">
          <div className="location-icon">
            <p className="location-pera">Location</p>
            <img src={location} alt="" />
          </div>
          <hr />
        </div>
        {/* select option */}
        <div>
          <select className="select select-bordered w-[80%] ml-6">
            <option disabled selected>
              Tulsa
            </option>
            <option>Han Solo</option>
            <option>Flowers</option>
          </select>
        </div>
        {/* category */}
        <div className="all-info">
          <div className="location-icon">
            <p className="location-pera">Category</p>
            <img src={category} alt="" />
          </div>
        </div>
        <div className="all-info">
          {/* check box */}
          <div className="form-control  mb-2">
            <label className="cursor-pointer flex justify-start align-middle gap-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text">All</span>
            </label>
          </div>
          <div className="form-control  mb-2">
            <label className="cursor-pointer flex justify-start align-middle gap-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text">Flowers</span>
            </label>
          </div>
          <div className="form-control  mb-2">
            <label className="cursor-pointer flex justify-start align-middle gap-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text">Trims</span>
            </label>
          </div>
          <div className="form-control  mb-2">
            <label className="cursor-pointer flex justify-start align-middle gap-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text">Biomass</span>
            </label>
          </div>
          <div className="form-control ">
            <label className="cursor-pointer flex justify-start align-middle gap-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text">Oils</span>
            </label>
          </div>
        </div>
        {/* price */}
        <div className="all-info">
          <div className="location-icon">
            <p className="location-pera">Price</p>
            <img src={price} alt="" />
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <span>$0</span>
            <span>$1000</span>
          </div>

          <progress
            className="progress progress-success w-56"
            value="40"
            max="100"
          ></progress>
        </div>
        {/* strain */}
        <div className="all-info">
          <div className="location-icon">
            <p className="location-pera">Strain</p>
            <img src={stater} alt="" />
          </div>
          <hr />
          <div className="mt-4">
            <button className="indigo-button">Indica</button>
            <button className="indigo-button">Sativa</button>
            <button className="indigo-button">Hybrid</button>
          </div>
        </div>
        {/* Cultivation Type */}
        <div className="all-info">
          <div className="location-icon">
            <p className="location-pera">Cultivation Type</p>
            <img src={cultivation} alt="" />
          </div>
          <hr />
          <div className="mt-4">
            <button className="indigo-button">All</button>
            <button className="indigo-button">Indoor</button>
            <button className="indigo-button">Outdoor</button>
          </div>
        </div>
      </div>

      {/* right side card  */}

      <div className="grid grid-cols-1 w-full gap-4 ">
        {card?.map((cards) => (
          <CardInformation card={cards} key={cards.id} />
        ))}
      </div>
    </div>
  );
};

export default SelectionOption;
