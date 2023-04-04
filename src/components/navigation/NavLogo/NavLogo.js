import React from "react";
import { Link } from "react-router-dom";
import FlatIronLogo from "../../shared/FlatIronLogo";
// import "./NavLogo.css";

const NavLogo = (props) => {
  return (
    <div className="portal-nav__logo">
      <Link to={"/deals/pipeline"}>
        <FlatIronLogo
          width={props.width ? props.width : "172px"}
          color={props.blue ? "#1C456A" : "#ffffff"}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
