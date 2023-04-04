import React from "react";
// import "./NavLinkGroupTitle.css";

const NavLinkGroupTitle = (props) => {
  return (
    <h3
      style={{ textTransform: "uppercase" }}
      id={props.id}
      className="nav-link-group-title"
    >
      {props.children}
    </h3>
  );
};

export default NavLinkGroupTitle;
