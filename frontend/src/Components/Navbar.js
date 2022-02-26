import React from "react";


function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-header" href="/">
            TimeSync
          </a>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-piece" href="/">
                  Feed
                  <span className="span">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-piece" href="/events">
                  Find Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-piece" href="/activities">
                  Get Activites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
