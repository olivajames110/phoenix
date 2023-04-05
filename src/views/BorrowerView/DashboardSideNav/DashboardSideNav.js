import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import VerticalNavLeftColumn from "../../../components/layout/VerticalNavLayout/VerticalNavLeftColumn";
import BorrowerVerticalNavigationLinks from "./BorrowerVerticalNavigationLinks";
import FlatIronLogo from "../../../components/shared/FlatIronLogo";

const DashboardSideNav = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <VerticalNavLeftColumn width={isCollapsed ? 65 : 195}>
      <Box
        sx={{
          margin: "20px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <FlatIronLogo width={"65px"} color={"#1C456A"} />
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

export default DashboardSideNav;
