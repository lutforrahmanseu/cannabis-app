import Navbar from "../Navbar/Navbar";
import "./Home.css";
import logo from "../../cannabis.png";
import Menu from "../Menu/Menu";
import SelectionOption from "../SelectionOption/SelectionOption";
const Home = ({ card }) => {
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
        <div className="top-banner">
          <div className="top-title">
            <h2 className="text-3xl text-black font-semibold mb-4">Auction</h2>
            <p className="text-sm">
              Explore and bid on your desired product based on several filters
            </p>
          </div>
          <SelectionOption card={card} />
        </div>
      </div>
    </div>
  );
};

export default Home;
