import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/users.context";
import React, { useContext, useMemo, useState } from "react";




const dropdownItemsAdmin = [
  "Manage News",
  "Manage Users",
  "Profile",
  "My newspaper",
];

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const dropdownItems = [
    {title: "Profile", onClick: () => {
      navigate('/profile');
    }},
    {title: "My newspaper", onClick: () => {
      navigate('/user/news');
    }},
    {title: "Logout", onClick: () => {}},
  ];

  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div
                className="navbar-brand"
                href="#"
                onClick={(e) => navigate("/")}
              >
                <img src="../../assets/img/core-img/logo.png" alt="Logo" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#worldNav"
                aria-controls="worldNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="worldNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Entertainment <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Politics & Worlds <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Sport <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Technology <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Business <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  {!!user && <li className="nav-item dropdown active">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user?.info?.username }
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {dropdownItems.map((item) => (
                        <a
                          key={item}
                          className="dropdown-item"
                          onClick={item.onClick}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </li>}
                  {!user && <li className="nav-item active">
                    <a className="nav-link" href="/login">
                      Login 
                    </a>
                  </li>}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
