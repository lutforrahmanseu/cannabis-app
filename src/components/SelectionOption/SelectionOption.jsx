import React from "react";

const SelectionOption = () => {
  return (
    <div className="card-container">
      <div className="select-info">
        <div className="all-info">
          <p className="location-pera">Location</p>
          <hr />
        </div>
        {/* select option */}
        <div>
          <select className="select select-bordered w-[80%] ml-6">
            <option disabled selected>
              Tusia
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        {/* category */}
        <div className="all-info">
          <p className="location-pera">Category</p>
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
          <p className="location-pera">Price</p>
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
          <p className="location-pera">Strain</p>
          <hr />
          <div className="mt-4">
            <button className="indigo-button">Indica</button>
            <button className="indigo-button">Sativa</button>
            <button className="indigo-button">Hybrid</button>
          </div>
        </div>
        {/* Cultivation Type */}
        <div className="all-info">
          <p className="location-pera">Cultivation Type</p>
          <hr />
          <div className="mt-4">
            <button className="indigo-button">All</button>
            <button className="indigo-button">Indoor</button>
            <button className="indigo-button">Outdoor</button>
          </div>
        </div>
      </div>
      <div>Right side</div>
    </div>
  );
};

export default SelectionOption;
