import logo from "./images/logo.png";

function Header({ handleClick }) {
  return (
    <div className="nav-bg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="navbar-brand logo" src={logo} alt="" />
          <h2 className="main-heading">ALD</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="nav-links collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="navTxt nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => handleClick("home")}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="navTxt nav-link" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navTxt nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => handleClick("contact")}
                >
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navTxt nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => handleClick("vehicles")}
                >
                  VEHICLES
                </a>
              </li>
              <li className="nav-item">
                <a className="navTxt nav-link" aria-current="page" href="#">
                  PRODUCTS & SERVICES
                </a>
              </li>
              <li className="nav-item book">
                <a className="navTxt nav-link" aria-current="page" href="#">
                  BOOK NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
