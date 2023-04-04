import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const MuiCheckbox = ({ label, onChange, sx, checkboxSx, end }) => {
  const endStyles = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 0,
    ...sx,
  };

  const styles = end ? endStyles : sx;

  return (
    <FormControlLabel
      sx={{ fontSize: "1rem", ...styles }}
      control={
        <Checkbox
          size="small"
          onChange={onChange}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 16, ...checkboxSx } }}
        />
      }
      label={label}
    />
  );
};

export default MuiCheckbox;
