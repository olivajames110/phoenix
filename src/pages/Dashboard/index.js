import {
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardMain from "../../components/DashboardMain";
import Page from "../../components/Page";
// import './Dashboard.css';

const Dashboard = (props) => {
  const drawerWidth = 240;
  return (
    <Page>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DashboardHeader />
      </Drawer>

      <DashboardMain>
        <AppBar
          sx={{
            boxShadow: "var(--bs) ",
            padding: "10px",
            background: "#ffffff",
            ".MuiTypography-root": {
              color: "black",
            },
          }}
        >
          asd
        </AppBar>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              Example {/* <Chart /> */}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}Example
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {/* <Orders /> */}Example
            </Paper>
          </Grid>
        </Grid>
      </DashboardMain>
    </Page>
  );
};

export default Dashboard;
