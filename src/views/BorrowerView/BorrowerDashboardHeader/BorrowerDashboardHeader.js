import { AppBar, Box, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import PortalScreenTitle from "../../../components/layout/Screen/PortalScreenTitle";
import ScreenSubTitle from "../../../components/layout/Screen/ScreenSubTitle";
import UserProfileButton from "../../../components/navigation/UserProfileButton";
import NotificationsButton from "./NotificationsButton";
// import "./BorrowerDashboardHeader.css";

const BorrowerDashboardHeader = ({ title }) => {
  const location = useLocation();
  const locationName = location.pathname;
  const pageTitle =
    locationName === "/"
      ? "Dashboard"
      : locationName.replace("/", "").replace("-", " ").replace("/", " > ");
  return (
    <>
      <AppBar sx={{ padding: "8px 0", boxShadow: "none" }} position="static">
        <Container maxWidth={false}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <PortalScreenTitle>{pageTitle}</PortalScreenTitle>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NotificationsButton />
              <UserProfileButton />
            </Box>
          </Box>
        </Container>
      </AppBar>
      {/* <Box
        sx={{
          background: "#ffffffa6",
          padding: "18px 0 14px 0",
          boxShadow: "var(--bs)",
          zIndex: 1111,
          borderWidth: "2px",
        }}
      >
        <Container maxWidth={false}>
          <ScreenSubTitle>Welcome back, Jimmy Oliva</ScreenSubTitle>
        </Container>
      </Box> */}
    </>
  );
};

export default BorrowerDashboardHeader;
