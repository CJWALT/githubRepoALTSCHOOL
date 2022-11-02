import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo__text">
            <Link to="/" className="nav__link">
              <h2 className="logo">
                GH <span>repositories</span>
              </h2>
            </Link>
          </div>
          <ul className="nav">
            <li>
              <Link to="/" className="nav__link">
                {" "}
                Overview
              </Link>
            </li>
            <li>
              <Link to="/issues" className="nav__link">
                {" "}
                Issues
              </Link>
            </li>
            <li>
              <Link to="/FetchRepo" className="nav__link">
                Repositories
              </Link>
            </li>
            {/* <li className='nav__link'><FaAlarm className='nav--icon'/></li> */}
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
