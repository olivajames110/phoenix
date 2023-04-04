import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useForm, useFormState } from "react-final-form";
// import "./input.css";
import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useEmployeeHook } from "../../../../../hooks/helpers/useEmployeeHook";
import FormField from "../../shared/FormField/FormField";
const _ = require("lodash");

export const EmployeeSelectFieldComponent = (props) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const formData = useSelector((state) => state.formData);

  const { values } = useFormState();
  const { getEmployeeNameItems } = useEmployeeHook();

  const {
    input: { name, value, ...restInput },
    meta,
    label,
    items,
    FormControlProps,
    noMargin,
    isRequired,
    helperText,
    id,
    onChange,
    onSelectChange,
    multiple,
    ...rest
  } = props;
  // console.log("fieldState", props, input);
  const { change } = useForm();
  const globalData = useSelector((state) => state.globalData);
  const currentValue = _.get(values, name);
  const originalValue = _.get(formData, name);

  const handleDefaultInputChange = (e) => {
    let val = e.target.value;
    let filteredEmployee = globalData?.employees?.filter(
      (em) => em.fullName === val
    );

    let employeeObject = filteredEmployee[0];
    let employeeFullNameString = filteredEmployee[0]?.fullName;

    let fieldIsModified = _.isEqual(
      String(originalValue?.fullName),
      String(employeeFullNameString)
    );

    if (onChange) {
      onChange(name, employeeObject, fieldIsModified);
    }

    if (onSelectChange) {
      onSelectChange(e);
    }

    change(name, employeeObject);
  };

  useEffect(() => {
    setSelectOptions(globalData.employees);
  }, [globalData.employees]);

  useEffect(() => {
    // if (!isLoggedIn) {
    //   setSelectOptions(loanOfficersSelectOptions);
    //   return;
    // }
    if (globalData.employees === undefined) {
      getEmployeeNameItems("*");
    }
  }, []);

  const isModified =
    props.editable &&
    String(currentValue?.fullName) !== String(originalValue?.fullName)
      ? true
      : undefined;
  return (
    <>
      <FormField
        className={`${isModified ? "modified" : ""}  ${
          props.display && "display-field"
        } ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        {/* <RenderCount /> */}
        {/* {props.label && <FormLabel>{props.label}</FormLabel>} */}
        <FormControl fullWidth variant="filled">
          {!props.display && (
            <InputLabel
              // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
              size="small"
              htmlFor={name}
            >
              {label}
              {isRequired && "*"}
            </InputLabel>
          )}

          <Select
            {...rest}
            name={name}
            // labelId={name}
            id={id}
            error={meta.error && meta.touched}
            multiple={multiple ? true : false}
            // error={true}
            size="small"
            label={label}
            defaultValue=""
            value={value.fullName === undefined ? value : value.fullName}
            variant="filled"
            inputProps={restInput}
            onChange={handleDefaultInputChange}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {selectOptions !== undefined &&
              selectOptions.map((i) => {
                return (
                  <MenuItem key={i.fullName} value={i.fullName}>
                    {i.fullName}
                  </MenuItem>
                );
              })}
          </Select>

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {meta.error && meta.touched && (
            <span className="error">{meta.error}</span>
          )}
        </FormControl>
      </FormField>
    </>
  );
};
// export default TextboxFormComponent;
