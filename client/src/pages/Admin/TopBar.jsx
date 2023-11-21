import React from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
const TopBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>
        <form className="d-none d-sm-inline-block form-inline my-auto navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{height:"40px", margin:" 10px 0"}}
       
            />
            <div className="input-group-append"  style={{height:"40px"}}>
              <button className="btn btn-primary bg-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw" />
            </a>
          </li>
          {/* Nav Item - Alerts */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw" />
              {/* Counter - Alerts */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
          </li>
          {/* Nav Item - Messages */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw" />
              {/* Counter - Messages */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a
              className=" nav-link"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <img
                // className="rounded-circle"
                className=""
                src="https://i.pinimg.com/736x/df/ce/a7/dfcea7989195d3273c2bcb367fca0a83.jpg"
                alt="avatar admin"
                // style={{ width: "20px", height: "20px" }}
              />
            </a>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
    </div>
  );
};

export default TopBar;
