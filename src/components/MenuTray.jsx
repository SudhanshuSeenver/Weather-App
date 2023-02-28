import "./menuTray.css";
import { GiStripedSun } from "react-icons/gi";
// import { IoMdToday } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function MenuTray() {
  const { pathname } = useLocation();
  // console.log(pathname);

  const activePage = {
    "/": "",
    "/map": "",
    "/today_hourly": "",
    "/setting": "",
  };

  activePage[pathname] = "active";

  return (
    <div className="tray-container ">
      <Link to="/" className="menu-item-link">
        <div className={`w--home menu-item ${activePage["/"]}`}>
          <GiStripedSun className="menu-icon" />
        </div>
      </Link>
      <Link to="/today_hourly" className="menu-item-link">
        <div className={`menu-item menuCom ${activePage["/today_hourly"]}`}>
          <RxCounterClockwiseClock className="menu-icon" />
        </div>
      </Link>
      <Link to="/map" className="menu-item-link">
        <div className={`menu-item menuCom ${activePage["/map"]}`}>
          <FaMapMarkedAlt className="menu-icon" />
        </div>
      </Link>
      <Link to="/setting" className="menu-item-link">
        <div className={`menu-item menuCom ${activePage["/setting"]}`}>
          <IoSettings className="menu-icon" />
        </div>
      </Link>
      {/* <div className="menu-item menuCom">E</div> */}
    </div>
  );
}

export default MenuTray;
