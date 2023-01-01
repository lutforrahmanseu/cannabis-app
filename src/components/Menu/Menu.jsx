import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import vector5 from "../../assets/Vector5.png";
import vector6 from "../../assets/Vector6.png";
import vector7 from "../../assets/Vector7.png";
import vector8 from "../../assets/Vector8.png";
import "./Menu.css";
const Menu = () => {
  return (
    <div>
      <ul className="menu  w-full  rounded-box">
        <li>
          <a href="/">
            <img src={vector1} alt="" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/" className="active-link">
            <img src={vector} alt="" />
            Inventory
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector2} alt="" />
            Marketplace
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector3} alt="" />
            Auction
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector4} alt="" />
            Orders
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector5} alt="" />
            Transports
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector6} alt="" />
            Labratories
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector7} alt="" />
            Transaction
          </a>
        </li>
        <li>
          <a href="/">
            <img src={vector8} alt="" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
