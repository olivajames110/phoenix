import {
  Checkbox,
  Divider,
  FormControlLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { isNil } from "lodash";
import React from "react";

const TableCheckboxToggle = (props) => {
  const [alignment, setAlignment] = React.useState("web");
  const isActive = props.active;
  const activeStyles = { borderColor: " gray" };
  const inactiveStyles = { borderColor: "blue" };
  const defaultStyles = {
    fontSize: "1rem",
    border: "1px solid",
    borderRadius: "40px",
    borderColor: isActive ? activeStyles : inactiveStyles,
  };
  const dynamicStyles = props.active ? activeStyles : defaultStyles;

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton sx={{ defaultStyles, ...dynamicStyles }} value="web">
        <Typography>{props.label}</Typography>
        <Divider sx={{ margin: "0 10px" }} orientation="vertical" />
        <Typography>{props.count}</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TableCheckboxToggle;
