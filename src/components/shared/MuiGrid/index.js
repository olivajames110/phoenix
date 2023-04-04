import { Grid } from "@mui/material";
import React from "react";

const MuiGrid = (props) => {
  return (
    <Grid container spacing={props.spacing ? props.spacing : 1} {...props}>
      {props.children}
    </Grid>
  );
};

export default MuiGrid;
