import React from "react";
import DisplayDataFieldItem from "../DisplayDataFieldItem";
import GridItem from "../MuiGrid/GridItem";

const _ = require("lodash");
const DisplayDataFieldGridItem = (props) => {
  if (_.isNil(props.value)) {
    return null;
  }
  return (
    <GridItem size={props.size ? props.size : 3}>
      <DisplayDataFieldItem {...props} />
    </GridItem>
  );
};

export default DisplayDataFieldGridItem;
