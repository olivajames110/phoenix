import React from "react";
import { useForm } from "react-final-form";
import FormField from "../../../shared/FormField/FormField";
// import { Radio } from "final-form-material-ui";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useFormState } from "react-final-form";

// import "./RadioField.css";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
import { isNil } from "lodash";
import { Stack } from "@mui/system";
import MuiGrid from "../../../../../shared/MuiGrid";
import GridItem from "../../../../../shared/MuiGrid/GridItem";

const MultiSelectFinalForm = (props) => {
  const { values, errors, submitFailed } = useFormState();

  const showError =
    props.isRequired &&
    submitFailed &&
    getObjectValueFromStringPath(values, props.name) === undefined;

  return (
    <FormField fieldLabel={props.fieldLabel} id="radio-field">
      <FormControl fullWidth variant="filled">
        <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>

        {props.columns ? (
          <MuiGrid spacing={0} sx={{ padding: "5px" }}>
            {props.items.map((o, i) => (
              <GridItem key={i} size={props.columns}>
                <CheckboxField parentName={props.name} value={o} />
              </GridItem>
            ))}
          </MuiGrid>
        ) : (
          <Stack sx={{ paddingTop: "10px" }}>
            {props.items.map((o) => (
              <CheckboxField key={o} parentName={props.name} value={o} />
            ))}
          </Stack>
        )}
      </FormControl>

      {showError && <span className="error">Required</span>}
    </FormField>
  );
};

export default MultiSelectFinalForm;

const CheckboxField = (props) => {
  const { values } = useFormState();
  const { change } = useForm();
  const { parentName, value } = props;
  const { name, label } = value;
  let parentValue = isNil(getObjectValueFromStringPath(values, parentName))
    ? []
    : getObjectValueFromStringPath(values, parentName);
  const doesExist = parentValue.some((e) => e.name === props.value.name);

  console.log("parentValue", parentValue);
  console.log("value", value);

  const checkIfChecked = () => {
    console.log("🚀 doesExist", doesExist);
    if (doesExist) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnChange = () => {
    let updated = [];
    if (doesExist) {
      console.log("🚀Before", parentValue);
      updated = parentValue.filter((i) => i.name !== name);
      console.log("🚀After", updated);
    } else {
      updated = [...parentValue, value];
    }
    change(parentName, updated);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handleOnChange}
          checked={checkIfChecked()}
          sx={{
            fontWeight: 600,
            marginLeft: "10px",
          }}
          size="medium"
        />
      }
      label={props.value.label}
    />
  );
};

// import React, { useEffect } from "react";
// import FormField from "../../../shared/FormField/FormField";
// import { Field } from "react-final-form";
// // import { Radio } from "final-form-material-ui";
// import {
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import { useFormState } from "react-final-form";

// import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
// import EditableFieldWrapper from "../../../shared/EditableFieldWrapper";
// import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
// import { find } from "lodash";

// const MultiSelectFinalForm = (props) => {
//   const { values, errors, submitFailed } = useFormState();

//   const showError =
//     submitFailed &&
//     getObjectValueFromStringPath(values, props.name) === undefined;
//   // const showError = submitFailed && errors[props.name];
//   const onRadioChange = (e) => {
//     console.log("change");
//     if (props.onChange) {
//       props.onChange(e);
//     }
//   };

//   return (
//     <FormField
//       fieldLabel={props.fieldLabel}
//       id="radio-field"
//       className={`${props.display ? "display-field" : ""} ${
//         props.slim ? "slim" : ""
//       }  `}
//       {...props}
//     >
//       <FormControl fullWidth variant="filled">
//         <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>

//         {props.items.map((o) => (
//           <Field
//             key={o}
//             name={props.name}
//             type={"checkbox"}
//             validate={props.isRequired && VALIDATOR_REQUIRE}
//             value={o}
//             size="medium"
//             component={CheckboxItem}
//             // onChange={onRadioChange}
//             {...props}
//             // component="input"
//           >
//             {o.label}
//           </Field>
//         ))}
//       </FormControl>

//       {showError && <span className="error">Required</span>}
//     </FormField>
//   );
// };

// export default MultiSelectFinalForm;

// const CheckboxItem = ({ input, children }) => {
//   const { values } = useFormState();
//   const val = getObjectValueFromStringPath(values, input.name);
//   console.log("input-----------------", input);
//   console.log("children-----------------", children);
//   console.log("value-----------------");
//   const checkIfChecked = () => {
//     let isChecked = find(val, (i) => i.name === input.name);
//     if (isChecked) return true;
//   };

//   return (
//     <FormControlLabel
//       control={
//         <Checkbox
//           checked={checkIfChecked()}
//           sx={{ marginLeft: "10px" }}
//           onChange={() => console.log("s")}
//           name="gilad"
//           {...input}
//         />
//       }
//       label={children}
//     />
//   );
// };
