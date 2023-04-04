import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const SelectInput = (props) => {
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    let val = event.target.value;
    // console.log("SelectInput change", val);
    setValue(val);
    props.onChange(val);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <FormControl
      fullWidth={props.width ? false : true}
      size="small"
      variant="filled"
      sx={{ minWidth: props.width, ...props.style }}
    >
      <InputLabel
        // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
        size="small"
        htmlFor={"select-input"}
      >
        {props.label}
      </InputLabel>

      <Select
        id={props.id}
        labelId={"select-input"}
        size="small"
        variant="filled"
        sx={{ width: props.width }}
        fullWidth={props.width ? false : true}
        value={props.value ? props.value : value}
        label="New Category"
        displayEmpty={props.displayEmpty}
        onChange={handleChange}
      >
        {props.children
          ? props.children
          : props.items.map((i) => (
              <MenuItem value={i.name}>{i.label}</MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
