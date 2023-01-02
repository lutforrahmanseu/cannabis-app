import React from "react";
import { Link } from "react-router-dom";
import "./ViewDetails.css";
import back from "../../assets/backbutton.png";
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flower2.png";
import flower3 from "../../assets/flower3.png";
import flower4 from "../../assets/flower4.png";
import flower5 from "../../assets/flower5.png";
import linkIcon from "../../assets/linkicon.png";
import pic from "../../assets/pic.png";

const ViewDetails = () => {
  return (
    <div className="view-details grid grid-cols-1 gap-3 mt-10">
      <div className="back-button">
        <div className="side-left">
          <Link className="m-5 flex gap-3" to="/">
            <img className="" src={back} alt="" />
            <p className="font-semibold">Back</p>
          </Link>
          <img src={flower1} alt="" />
          <img src={flower2} alt="" />
          <img src={flower3} alt="" />
          <img src={flower4} alt="" />
          <img src={flower4} alt="" />
        </div>

        <div className="mt-20">
          <img src={flower5} alt="" />
        </div>
        <div className="mt-20 out-door gap-6">
          <div>
            <h2 className="mb-5 text-4xl">Royal ACDC Outdoor</h2>
            <p className="flex gap-3 text-2xl">
              Gold Leaf Flowers <img src={linkIcon} alt="" />
            </p>
            <div className="flex justify-between align-middle mt-5 gap-3 flo-wers">
              <p>Category: Flowers</p>
              <p>Strains: Indica</p>
              <p>Terpenes: 10</p>
              <p>Canabinoids: 15</p>
            </div>
            <hr className="m-3 rounded-md" />
            <div className="flex justify-between align-middle mt-5 gap-3 flo-wers">
              <p>Cultivation: Indoor</p>
              <p>THC: 0.5%</p>
              <p>Batch No: B54U</p>
              <p>Brand: Gold</p>
            </div>

            {/* card */}
            <div></div>
          </div>
          <div className="">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>
            <p className="m-2 text-slate-300">4.9 (2130 reviews)</p>
          </div>
        </div>
      </div>
      <div className="footer-banner mt-5 flex justify-start gap-10 text-3xl font-semibold align-middle">
        <Link>Messages</Link>
        <Link>Auction</Link>
        <Link>Marketplace</Link>
        <Link className="link-color">Feedback</Link>
      </div>
      <div className="grid grid-cols-1 gap-24 footer-banner">
        <div className="flex justify-start">
          <div className="flex justify-start gap-10">
            <img src={pic} alt="" />
            <div className="flex justify-evenly gap-4">
              <div>
                <h1>Ken Miles</h1>
                <p>This product is pretty good!</p>
              </div>

              <p className="born">21 Aug, 2021</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="flex justify-start gap-10">
            <img src={pic} alt="" />
            <div className="flex justify-evenly gap-4">
              <div>
                <h1>Ken Miles</h1>
                <p>This product is pretty good!</p>
              </div>

              <p className="born">21 Aug, 2021</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start mb-8">
          <div className="flex justify-start gap-10">
            <img src={pic} alt="" />
            <div className="flex justify-evenly gap-4">
              <div>
                <h1>Ken Miles</h1>
                <p>This product is pretty good!</p>
              </div>

              <p className="born">21 Aug, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
