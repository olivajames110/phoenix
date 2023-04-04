import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { SelectFieldComponent } from "../../../../../form/components/inputs/finalFormComponents/SelectFieldComponent";
import EditableFieldWrapper from "../../../../../form/components/shared/EditableFieldWrapper";
import FormField from "../../../../../form/components/shared/FormField/FormField";
import SelectInput from "../../../../NonFormInputs/SelectInput";
import "./TableFilterItem.css";

const TableFilterItem = (props) => {
  const { label, onChange, items, name } = props;

  const [value, setValue] = React.useState("");
  // const [value, setValue] = React.useState("all");

  const handleChange = (event) => {
    let val = event.target.value;
    if (val === "all") {
      setValue("");
    }
    if (val !== "all") {
      setValue(val);
    }
    let data = {
      name: props.name,
      value: val,
    };

    props.handleTableFilter(data);
  };

  useEffect(() => {
    if (props.tableFilters.length === 0) {
      setValue("");
    }
  }, [props.tableFilters]);

  return (
    <FormField
      className={` display-field table-filter-item ${
        value !== "" && "active"
      } `}
      {...props}
    >
      <TextField
        select
        size="small"
        name={name}
        // labelId={name}
        placeholder={"label"}
        fullWidth
        // error={true}
        // sx={{ minWidth: 150 }}
        label={label}
        value={value}
        variant="filled"
        onChange={handleChange}
      >
        <MenuItem value="all">
          <em>All</em>
        </MenuItem>
        {items.map((i) => {
          return typeof i === "string" ? (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ) : (
            <MenuItem key={i} value={i.name}>
              {i.label}
            </MenuItem>
          );
        })}
      </TextField>
    </FormField>
  );
};

export default TableFilterItem;
