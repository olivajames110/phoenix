import { isArray } from "lodash";
import React from "react";
import DisplayTable from "./DisplayTable";
import FlatironTable from "./FlatironTable";
import FlatironTableHeader from "./FlatironTable/FlatironTableHeader";

export const FlatironDisplayTable = (props) => {
  // Use the state and functions returned from useTable to build your UI

  // Render the UI for your table
  if (!isArray(props.data)) {
    console.error("Not an array");
    return;
  }
  return (
    <>
      <FlatironTable style={{ overflowX: "auto" }}>
        {props.title && <FlatironTableHeader {...props} />}

        <DisplayTable noBorder {...props} />
      </FlatironTable>
    </>
  );
};

export default FlatironDisplayTable;
