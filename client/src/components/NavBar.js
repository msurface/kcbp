import React from 'react';

const NavBar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="#">
          KCBP Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active mr-3">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">
                Buy a Book
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#" tabindex="-1">
                Veterans Community Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
