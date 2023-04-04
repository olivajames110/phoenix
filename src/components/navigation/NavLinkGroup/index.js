import React from "react";
import NavLinkGroupTitle from "../NavLinkGroupTitle";
import "./NavLinkGroup.css";

const NavLinkGroup = (props) => {
  return (
    <div id={props.id} className="nav-link-group">
      {props.title ? (
        <NavLinkGroupTitle>{props.title}</NavLinkGroupTitle>
      ) : null}
      <div className="nav-link-group-links">{props.children}</div>
    </div>
  );
};

export default NavLinkGroup;
