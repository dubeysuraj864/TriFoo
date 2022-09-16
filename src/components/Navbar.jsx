import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";
import { MdLocalOffer } from "react-icons/md";
function Navbar() {
  return (
    <>
      <h6>
        <MdLocalOffer /> &nbsp; Free Home Delivery on Order Above $500/-
      </h6>

      <nav>
      <ul className="menu">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" id="turn">
          {" "}
          <span className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          
          </span>
      
        </label>
        <span className="logo">TriFoo</span>

        

        <ul className="navlinks">
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
            <Link className="tnc-link" to="/tnc">
              Terms & Conditions
            </Link>
          </li>
        </ul>
        </ul>
        <ul className="login-cart">
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
