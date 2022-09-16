import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";
import {MdLocalOffer} from "react-icons/md";
function Navbar() {
  return (
    <>
      <h6>
        <MdLocalOffer /> &nbsp;
        Free Home Delivery on Order Above $500/-
      </h6>
      <nav>
        <ul>
          <Link to="/">
            <span className="logo">TriFoo</span>
          </Link>
        </ul>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/tnc">Terms & Conditions</Link>
          </li>
        </ul>
        <ul>
        <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart(1)</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
