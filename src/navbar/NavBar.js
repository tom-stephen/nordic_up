import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"; // Import CSS file for styling

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/order">Order</Link>
          </li>
          <li className="nav-item">
            <Link to="/the-product">The Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBar;
