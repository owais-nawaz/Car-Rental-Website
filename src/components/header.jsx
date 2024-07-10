import logo from "./images/logo.png";

function Header({ setCurrentPage }) {
  return (
    <div class="nav-bg">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img class="navbar-brand logo" src={logo} alt=""></img>
          <h2 class="main-heading">ALD</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="nav-links collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="navTxt nav-link" aria-current="page" href="">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="navTxt nav-link" aria-current="page" href="">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="navTxt nav-link" aria-current="page" href="">
                  CONTACT
                </a>
              </li>
              <li class="nav-item">
                <a class="navTxt nav-link" aria-current="page" href="">
                  VEHICLES
                </a>
              </li>
              <li class="nav-item">
                <a class="navTxt nav-link" aria-current="page" href="">
                  PRODUCTS & SERVICES
                </a>
              </li>
              <li class="nav-item book">
                <a class="navTxt nav-link" aria-current="page" href="">
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
