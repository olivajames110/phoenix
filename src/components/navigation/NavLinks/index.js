import React from "react";
import NavLink from "../NavLink";
// import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <nav id="nav-links" className={props.column ? "column" : "row"}>
      <ul>
        {props?.links?.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path} label={route.label} />
            {/* <NavLink
              className={(navData) => (navData.isActive ? `active  ` : "")}
              to={route.path}
            >
              <button id="dashboard" className={`nav-link-item `}>
                <span className="link-item-title">{route.label}</span>
              </button>
            </NavLink> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
