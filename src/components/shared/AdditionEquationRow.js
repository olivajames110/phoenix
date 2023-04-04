import { Stack } from "@mui/material";
import { isNil, isNumber } from "lodash";
import React from "react";
import { formFormatDollar } from "../../helpers/parse/formFormatDollar";
import DisplayDataFieldItem from "./DisplayDataFieldItem";

const AdditionEquationRow = (props) => {
  console.log("props.value1--->", props.value1);
  console.log("props.value2--->", props.value2);

  const val1 =
    isNaN(props.value1) || isNil(props.value1) || !isNumber(props.value1)
      ? 0
      : props.value1;
  const val2 =
    isNaN(props.value2) || isNil(props.value2) || !isNumber(props.value2)
      ? 0
      : props.value2;

  console.log("EQ", val1, val2);
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent={"space-around"}
      spacing={1}
    >
      {props.children[0]}
      <span
        style={{
          color: "#808080e8",
          fontWeight: 300,
          fontSize: "1.8rem",
        }}
      >
        +
      </span>
      {props.children[1]}
      <span
        style={{
          color: "#808080e8",
          fontWeight: 300,
          fontSize: "1.8rem",
        }}
      >
        =
      </span>

      <DisplayDataFieldItem
        label="Total Loan Amount"
        value={`$${formFormatDollar(val1 + val2)}`}
        large
      />
    </Stack>
  );
};

export default AdditionEquationRow;
