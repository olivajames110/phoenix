import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

import { geocodeByPlaceId } from "react-google-places-autocomplete";
import { Field, useForm, useFormState } from "react-final-form";
import FormGroup from "../../../shared/FormGroup/FormGroup";
import FormField from "../../../shared/FormField/FormField";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
import { useState } from "react";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_REQUIRE_NO_MESSAGE,
} from "../../../../../../helpers/validators/inputValidators";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import MuiGrid from "../../../../../shared/MuiGrid";
import GridItem from "../../../../../shared/MuiGrid/GridItem";
import { EditRounded, ExpandMore } from "@mui/icons-material";
import { TextFieldComponent } from "../../finalFormComponents/TextFieldComponent";
import "./MuiAddressAutofill.css";
import { useEffect } from "react";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const MuiAddressAutofill = (props) => {
  const { values, errors, submitFailed } = useFormState();
  const [isEditing, setIsEditing] = useState(false);
  const { change } = useForm();
  const handleAccordianClick = (data) => {
    console.log("Change");
    if (isEditing) setIsEditing(false);
    if (!isEditing) setIsEditing(true);
  };

  const clearDataHandler = () => {
    console.log("Clear Run");

    setIsEditing(false);
    change(`${props.name}`, undefined);
  };
  let combinedAddress = `${getObjectValueFromStringPath(
    values,
    `${props.name}.address.streetNumber`,
    " "
  )} ${getObjectValueFromStringPath(
    values,
    `${props.name}.address.streetName`,
    " "
  )}, ${getObjectValueFromStringPath(
    values,
    `${props.name}.address.city`,
    " "
  )} ${getObjectValueFromStringPath(
    values,
    `${props.name}.address.state`,
    " "
  )} ${getObjectValueFromStringPath(values, `${props.name}.address.zip`, " ")}`;

  const checkIfValidZip = (string) => {
    // const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(string);
    const isValidZip = /^\d{5}(-\d{4})?$/.test(string);
    return isValidZip ? string : "";
  };

  const clearAddressButton = (
    <div id="clear" className="button-container">
      <button onClick={clearDataHandler} type="button">
        <span>Clear Address</span>
      </button>
    </div>
  );

  return (
    <FormGroup
      label={props.label}
      bottomBorder={props.bottomBorder}
      noMargin={props.noMargin}
    >
      <FormField
        fieldLabel={props.fieldLabel}
        noMargin={props.noMargin}
        id="address-autofill"
      >
        {/* <AutofillAddressInput /> */}
        {getObjectValueFromStringPath(values, `${props.name}.address`) ===
          undefined &&
          !isEditing && (
            <Field
              validate={VALIDATOR_REQUIRE}
              // name={"addressAutofill"}
              // label="Address Address"
              name={`${props.name}.address.streetNumber`}
              label="Number"
              component={AutofillAddressInput}
              // setSelectedAddress={setSelectedAddress}
              // customAddressHandler={customAddressHandler}
              {...props}
            />
          )}
        {(getObjectValueFromStringPath(values, `${props.name}.address`) !==
          undefined ||
          isEditing) && (
          <Accordion
            id="all-fields-accordian"
            expanded={
              isEditing &&
              getObjectValueFromStringPath(values, `${props.name}.address`) !==
                undefined
            }
            // onChange={() => setIsEditing(false)}
          >
            <AccordionSummary
              expandIcon={
                isEditing &&
                getObjectValueFromStringPath(
                  values,
                  `${props.name}.address`
                ) !== undefined ? (
                  <ExpandMore
                    sx={{ height: "20px", width: "20px" }}
                    onClick={handleAccordianClick}
                  />
                ) : (
                  <EditRounded
                    sx={{ height: "20px", width: "20px" }}
                    onClick={handleAccordianClick}
                  />
                )
              }
              // expandIcon={
              //   <ExpandMore
              //     sx={{ height: "20px", width: "20px" }}
              //     onClick={handleAccordianClick}
              //   />
              // }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {getObjectValueFromStringPath(
                  values,
                  `${props.name}.address.fullAddress`
                ) === undefined
                  ? combinedAddress
                  : getObjectValueFromStringPath(
                      values,
                      `${props.name}.address.fullAddress`
                    )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MuiGrid>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.streetNumber`}
                    label="Number"
                    validate={VALIDATOR_REQUIRE}
                    // parse={parseNumber}

                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.streetName`}
                    label="Street"
                    validate={VALIDATOR_REQUIRE}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.city`}
                    label="City"
                    validate={VALIDATOR_REQUIRE}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.state`}
                    label="State"
                    validate={VALIDATOR_REQUIRE}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.zip`}
                    label="Zip Code"
                    validate={VALIDATOR_REQUIRE_NO_MESSAGE}
                    // parse={parseNumber}

                    helperText={
                      checkIfValidZip(
                        getObjectValueFromStringPath(
                          values,
                          `${props.name}.address.zip`
                        )
                      )
                        ? null
                        : "Valid Zip Required"
                    }
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.country`}
                    label="Country"
                    validate={VALIDATOR_REQUIRE}
                    component={TextFieldComponent}
                  />
                </GridItem>
              </MuiGrid>

              {clearAddressButton}
            </AccordionDetails>
          </Accordion>
        )}
      </FormField>
    </FormGroup>
  );
};

export default MuiAddressAutofill;

function AutofillAddressInput(props) {
  const [value, setValue] = React.useState(null);
  const [isCustom, setIsCustom] = React.useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);
  const { values } = useFormState();
  const { change } = useForm();

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  const checkIfValidZip = (string) => {
    // const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(string);
    const isValidZip = /^\d{5}(-\d{4})?$/.test(string);
    return isValidZip ? string : "";
  };

  const findAddressDetails = async (selectedAddress) => {
    console.log(
      "----------------------------------ADDRESS SELECT--------",
      selectedAddress
    );
    let placeId = selectedAddress.place_id;
    // let placeId = id;

    let address;
    await geocodeByPlaceId(placeId).then((results) => {
      console.log("NPM", results);

      let terms = selectedAddress.terms; //Real GoogleMaps
      let addressComponents = results[0].address_components; //NPM Package

      if (terms.length === 4) {
        // 415 West Oak Street, San Bernardino, CA, USA
        address = {
          streetNumber: addressComponents[0].long_name, //Good
          streetName: addressComponents[1].long_name, //Good
          city: selectedAddress.terms[1].value,
          state: selectedAddress.terms[2].value,
          country: selectedAddress.terms[3].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 1].long_name
          ),
        };
      }

      if (terms.length === 5) {
        // 125 Carley Avenue, Huntington, NY, USA
        address = {
          streetNumber: selectedAddress.terms[0].value, //Good
          streetName: selectedAddress.terms[1].value, //Good
          city: selectedAddress.terms[2].value,
          state: selectedAddress.terms[3].value,
          country: selectedAddress.terms[4].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      if (terms.length === 6) {
        // 4711 SW 25th St, West Park, FL 33023, USA
        address = {
          streetNumber: selectedAddress.terms[0].value, //Good
          streetName: selectedAddress.terms[1].value, //Good
          city: selectedAddress.terms[2].value,
          state: selectedAddress.terms[3].value,
          country: selectedAddress.terms[5].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      if (terms.length === 7) {
        // 256 North Main Street l 7, Andover, MA 01810, USA
        address = {
          streetNumber: selectedAddress.terms[0].value, //Good
          streetName: `${selectedAddress.terms[1].value} ${selectedAddress.terms[2].value}`, //Good
          city: selectedAddress.terms[3].value,
          state: selectedAddress.terms[4].value,
          country: selectedAddress.terms[6].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      address.fullAddress = `${address.streetNumber} ${address.streetName}, ${address.city} ${address.state} ${address.zip}`;

      // address = {
      //   streetNumber: results[0].address_components[0]?.long_name,
      //   streetName: results[0].address_components[1]?.long_name,
      //   city: results[0].address_components[2]?.long_name,
      //   state: results[0].address_components[5]?.long_name,
      //   country: results[0].address_components[6]?.long_name,
      //   zip: results[0].address_components[7]?.long_name,
      // };

      // setIsEditing(true);
      change(`${props.name}.address`, address);
      // return address;
    });
  };

  useEffect(() => {
    console.log("props", props.input.value);
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          console.log("AUTOCOMPLETE RESULTS", results);
          findAddressDetails(results[0]);
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      size="small"
      variant="filled"
      // sx={{ width: 300 }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={props.input.value}
      // value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label ? props.label : "Address"}
          fullWidth
          size="small"
          variant="filled"
        />
      )}
      renderOption={(props, option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length])
        );

        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item>
                <Box
                  component={LocationOnIcon}
                  sx={{ color: "text.secondary", mr: 2 }}
                />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}

                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}
