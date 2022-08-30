import React, {useContext} from "react";
import * as IconName from "react-icons/bs";
//import About from './routes/AboutUs.jsx';
import { Link } from "react-router-dom";

import AuthContext from "../store/auth-context";

function NavBar() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn= authCtx.isLoggedIn;

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
                    About Us Home
                  </Link>
                </li>
                {!isLoggedIn && (
                <li class="nav-item">
                  <Link to="/authpage" class="nav-link">
                    Login
                  </Link>
                 </li>
                 )}
                 {isLoggedIn &&(
                  <li class="nav-item">
                  <Link to="/ticketpage" class="nav-link">
                    Tickets Page
                  </Link>
                 </li>
                 )}
                 {isLoggedIn && (
                <li class="nav-item">
                  <button>Logout</button>
                </li>
                )}
                {/* // <li class="nav-item">
                //   <Link to="/authpage" class="nav-link">
                //     Login
                //   </Link>
                //  </li>
                // <li class="nav-item">
                //   <Link to="/ticketpage" class="nav-link">
                //     Tickets Page
                //   </Link>
                //  </li>
                // <li class="nav-item">
                //   <button>Logout</button>
                // </li> */}
              </ul>
          </div>
        </nav>
  );
}

export default NavBar;