import { MenuItem } from "@mui/material";
import React from "react";
import EditableFieldWrapper from "../../../../form/components/shared/EditableFieldWrapper";
import FormField from "../../../../form/components/shared/FormField/FormField";
import SelectInput from "../../../NonFormInputs/SelectInput";

const NumTableRowsSelector = (props) => {
  const { items, onChange, data } = props;
  return (
    <div id={props.id} className="number-of-table-rows-selector">
      <FormField className={` display-field  `} {...props}>
        <EditableFieldWrapper label="Show" display select {...props}>
          <SelectInput
            width="100px"
            label="Maximum Rows Shown"
            onChange={onChange}
            {...props}
          >
            {items.map((i) => (
              <MenuItem key={i} value={i}>
                {i} Rows
              </MenuItem>
            ))}
            <MenuItem value={data.length}>Show All</MenuItem>
          </SelectInput>
        </EditableFieldWrapper>
      </FormField>
    </div>
  );
};

export default NumTableRowsSelector;
