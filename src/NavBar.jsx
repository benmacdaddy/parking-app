import React from "react";
import * as IconName from "react-icons/bs";

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
                  <a href="#" class="nav-link active">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Features
                  </a>
                 </li>
                 <li class="nav-item">
                   <a href="#" class="nav-link">
                     About us
                   </a>
                 </li>
              </ul>
              {/* <form class="form-inline ml-auto my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-light" type="submit">Search</button>
              </form> */}
          </div>
        </nav>
  );
}

export default NavBar;