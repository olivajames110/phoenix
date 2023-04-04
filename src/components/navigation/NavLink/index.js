import { HomeRounded } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

const ReactRouterNavLink = ({ hideText, id, to, icon, label }) => {
  return (
    <NavLink
      style={{ width: "100%" }}
      id={id}
      className={(navData) =>
        navData.isActive ? `nav-link-item active  ` : "nav-link-item"
      }
      to={to}
    >
      <ListItemButton sx={{ fontSize: ".75rem", width: "100%" }}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        {hideText ? null : <ListItemText primary={label} />}
      </ListItemButton>
    </NavLink>
  );
};

export default ReactRouterNavLink;
