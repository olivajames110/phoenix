import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import VerticalNavLeftColumn from "../../../components/layout/VerticalNavLayout/VerticalNavLeftColumn";
import NavLogo from "../../../components/navigation/NavLogo";
import FlatIronLogo from "../../../components/shared/FlatIronLogo";
import BorrowerVerticalNavigationLinks from "./BorrowerVerticalNavigationLinks";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";

const BorrowerVerticalNavigation = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <VerticalNavLeftColumn width={isCollapsed ? 65 : 195}>
      <Box
        sx={{
          margin: "20px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "3px",
        }}
      >
        <FlatIronLogo width={"135px"} color={"#1C456A"} />
        <IconButton
          onClick={() => setIsCollapsed((s) => !s)}
          sx={{ padding: "5px" }}
        >
          {isCollapsed ? (
            <ExpandLessRounded sx={{ color: "var(--blue)" }} />
          ) : (
            <ExpandMoreRounded sx={{ color: "var(--blue)" }} />
          )}
        </IconButton>
      </Box>
      <BorrowerVerticalNavigationLinks isCollapsed={isCollapsed} />
    </VerticalNavLeftColumn>
  );
};

export default BorrowerVerticalNavigation;
