import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const TableCheckbox = (props) => {
  return (
    <FormControlLabel
      sx={{ fontSize: "1rem" }}
      control={
        <Checkbox
          size="small"
          onChange={props.onChange}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
        />
      }
      label={props.label}
    />
  );
};

export default TableCheckbox;
