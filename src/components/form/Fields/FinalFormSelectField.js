import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { isArray } from "lodash";
import React from "react";
import { useMemo } from "react";
import { Field } from "react-final-form";

import { arrayProtector } from "../../../helpers/arrayProtector";
import RenderCount from "../components/RenderCount/RenderCount";
import FormField from "../components/shared/FormField/FormField";

/**
 * Example:
    <FinalFormSelectField
        name={"state"}
        label="State"
        items={options_stateInitials}
    />
 */

const FinalFormSelectField = ({
  name,
  label,
  validate,
  fullWidth,
  isRequired,
  helperText,
  items,
  placeholder,
  count,
  onChange,
}) => {
  let itemsList = useMemo(() => arrayProtector(items), [items]);
  // console.log("onChange: ", onChange);
  // console.log("items: ", items);
  return (
    <FormField fullWidth={fullWidth ? fullWidth : true}>
      <Field name={name} validate={validate}>
        {({ input, meta }) => (
          <FormControl
            fullWidth={fullWidth ? fullWidth : true}
            variant="filled"
          >
            {label && (
              <InputLabel size="small" htmlFor={name}>
                {label}
                {isRequired && "*"}
              </InputLabel>
            )}
            {count ? <RenderCount /> : null}
            <RenderCount />
            <Select
              error={meta.error && meta.touched}
              size="small"
              label={label}
              variant="filled"
              // onChange={onChange}
              {...input}
            >
              <MenuItem disabled value="">
                <em>{placeholder}</em>
              </MenuItem>
              {!isArray(items)
                ? null
                : itemsList.map((i) => {
                    return typeof i === "string" ? (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ) : (
                      <MenuItem key={i.name} value={i.name}>
                        {i.label}
                      </MenuItem>
                    );
                  })}
            </Select>

            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        )}
      </Field>
    </FormField>
  );
};

export default React.memo(FinalFormSelectField);
