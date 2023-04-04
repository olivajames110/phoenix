import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { fieldNames } from "../../../../../global/forms/fieldNames";
import { parseNumber } from "../../../../../helpers/parse/parseNumber";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import MuiGrid from "../../../../shared/MuiGrid";
import GridItem from "../../../../shared/MuiGrid/GridItem";
import FormGroup from "../../shared/FormGroup/FormGroup";
import { SelectFieldComponent } from "../finalFormComponents/SelectFieldComponent";
import { TextFieldComponent } from "../finalFormComponents/TextFieldComponent";

// import "./DobField.css";

const DobField = (props) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let daysInMonths = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const { values } = useFormState();
  return (
    <>
      <FormGroup fieldLabel={"Date of Birth"}>
        <MuiGrid>
          <GridItem size={4}>
            <Field
              validate={VALIDATOR_REQUIRE}
              name={fieldNames.dobMonth}
              label="Select Month"
              component={SelectFieldComponent}
              items={months}
            />
          </GridItem>
          <GridItem size={4}>
            <Field
              validate={VALIDATOR_REQUIRE}
              parse={parseNumber}
              name={fieldNames.dobDay}
              label="Day"
              component={TextFieldComponent}
            />
          </GridItem>
          <GridItem size={4}>
            <Field
              validate={VALIDATOR_REQUIRE}
              // parse={parseNumber}
              name={fieldNames.dobYear}
              label="Year"
              component={TextFieldComponent}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
    </>
  );
};

export default DobField;
