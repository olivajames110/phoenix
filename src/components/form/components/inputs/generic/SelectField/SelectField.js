import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
// import { Field, useFormState } from "react-final-form";
import { ReactComponent as SelectArrow } from "../../../../../../assets/svgs/downTriange.svg";
import FormField from "../../../shared/FormField/FormField";
// import { Select } from "final-form-material-ui";
import { Field } from "react-final-form";
// import { Select } from "final-form-material-ui";
// import MenuItem from "@material-ui/core/MenuItem";

import FormLabel from "../../../shared/FormLabel/FormLabel";
// import SelectInput from "@material-ui/core/Select/SelectInput";
// import { Menu } from "@material-ui/core";
import "./SelectField.css";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
import RenderCount from "../../../RenderCount/RenderCount";
// SelectInput

const SelectField = (props) => {
  const [selectValue, setSelectValue] = useState("March");
  // const handleChange = (e) => {
  //   console.log("Change");
  //   let val = e.target.value;
  //   setIsActive(true);
  //   // props.onChange(val);
  //   // props.handleSelectChange();
  // };

  const childrenContent = props.children;

  const selectOptions = (
    <>
      {/* <option disabled selected value={""}>
        {props.defaultValue}
      </option> */}
      {props.items &&
        props.items.map((item) => <option value={item}>{item}</option>)}
    </>
  );

  const customOptionMenu = (
    <div className="option-menu">
      {props.items &&
        props.items.map((item) => (
          <div
            className="select-option-item"
            onClick={(item) => setSelectValue(item)}
            data-value={item}
          >
            {item}
          </div>
        ))}
    </div>
  );

  return (
    <>
      <Field
        name={props.name}
        validate={props.isRequired && VALIDATOR_REQUIRE}
        type="select"
        component="select"
        children={props.children}
      >
        {({ input, meta }) => (
          <FormField
            noMargin={props.noMargin}
            className={(meta.active || meta.valid) && "active"}
            id="select-field"
          >
            {/* <RenderCount /> */}
            <div
              className={`select-wrapper ${meta.valid && "selected"} ${
                (meta.active || meta.valid) && "active"
              }`}
            >
              <FormLabel
                className={
                  meta.active || meta.valid
                    ? "form-label-select--active"
                    : "form-label-select"
                }
                label={props.label}
              />
              <select className="MuiOutlinedInput-input" {...input}>
                {props.children ? (
                  props.children
                ) : (
                  <>
                    {!meta.active && (
                      <option disabled value={""}>
                        {props.defaultValue}
                      </option>
                    )}
                    <option disabled selected value={""}>
                      {props.defaultValue}
                    </option>
                    {props.items &&
                      props.items.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                  </>
                )}
              </select>
              {/* {meta.active && customOptionMenu} */}
              <fieldset
                className={`${meta.error && meta.touched && "error"} ${
                  meta.active && "focused"
                }`}
              ></fieldset>
              <div className={`arrow-wrapper ${meta.active && "active"}`}>
                {<SelectArrow />}
              </div>
            </div>
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormField>
        )}
      </Field>
    </>
  );
};

export default SelectField;
