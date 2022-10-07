import { Link } from "react-router-dom";
import { CartIcon } from "../cart-icon/cart-icon.component";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <img
          src="../../images/imagen1.jpg"
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </Link>
      <Link to="/carrito">
        <CartIcon />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              INICIO <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PRODUCTOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              QUIENES SOMOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" tabindex="-1">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
