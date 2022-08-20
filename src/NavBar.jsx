import React from "react";
import * as IconName from "react-icons/bs";
//import About from './routes/AboutUs.jsx';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a
           href="#"
           class="navbar-brand mb-0 h1">
            <div class="px-3">
            <IconName.BsColumns/>
            </div>
          </a>
          <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          class="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/authpage" class="nav-link">
                    Login
                  </Link>
                 </li>
                 <li class="nav-item">
                  <Link to="/features" class="nav-link">
                    Features
                  </Link>
                 </li>
                 <li class="nav-item">
                  <Link to="/about" class="nav-link">About Us</Link>
                 </li>
              </ul>
          </div>
        </nav>
  );
}

export default NavBar;