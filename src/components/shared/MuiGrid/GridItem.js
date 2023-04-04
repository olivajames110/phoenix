import { Grid } from "@mui/material";
import React from "react";

const _ = require("lodash");

const GridItem = (props) => {
  return (
    <Grid item xs={props.size} {...props}>
      {props.children}
    </Grid>
  );
};

export default GridItem;
