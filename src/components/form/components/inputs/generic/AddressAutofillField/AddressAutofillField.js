import { EditRounded, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { isNil } from "lodash";
import React, { useState } from "react";
import { Field, useForm, useFormState } from "react-final-form";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { usaStateInitials } from "../../../../../../forms/_formQuestions/selectOptions";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
import { parseNumber } from "../../../../../../helpers/parse/parseNumber";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_REQUIRE_NO_MESSAGE,
} from "../../../../../../helpers/validators/inputValidators";
import MuiGrid from "../../../../../shared/MuiGrid";
import GridItem from "../../../../../shared/MuiGrid/GridItem";
import FormField from "../../../shared/FormField/FormField";
import FormGroup from "../../../shared/FormGroup/FormGroup";
import { SelectFieldComponent } from "../../finalFormComponents/SelectFieldComponent";
import { TextFieldComponent } from "../../finalFormComponents/TextFieldComponent";
import "./AddressAutofillField.css";

const AddressAutofillField = (props) => {
  const { values, errors, submitFailed } = useFormState();

  // const [selectedAddress, setSelectedAddress] = useState();

  let showAutoFill = !props.value;
  const [isEditing, setIsEditing] = useState(false);
  //
  const showError = submitFailed && showAutoFill;
  const { change } = useForm();

  //FUNCTIONS
  const checkIfValidZip = (string) => {
    // const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(string);
    const isValidZip = /^\d{5}(-\d{4})?$/.test(string);
    return isValidZip ? string : "";
  };

  const findAdditionalAddressInformation = async (googleAddress) => {
    console.log(
      "----------------------------------ADDRESS SELECT--------",
      googleAddress
    );
    let placeId = googleAddress.value.place_id;
    let selectedGoogleAddress = googleAddress.value;
    let address;
    await geocodeByPlaceId(placeId).then((results) => {
      console.log("NPM", results);

      let terms = selectedGoogleAddress.terms; //Real GoogleMaps
      let addressComponents = results[0].address_components; //NPM Package

      if (terms.length === 4) {
        // 415 West Oak Street, San Bernardino, CA, USA
        address = {
          streetNumber: addressComponents[0].long_name, //Good
          streetName: addressComponents[1].long_name, //Good
          city: selectedGoogleAddress.terms[1].value,
          state: selectedGoogleAddress.terms[2].value,
          country: selectedGoogleAddress.terms[3].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 1].long_name
          ),
        };
      }

      if (terms.length === 5) {
        // 125 Carley Avenue, Huntington, NY, USA
        address = {
          streetNumber: selectedGoogleAddress.terms[0].value, //Good
          streetName: selectedGoogleAddress.terms[1].value, //Good
          city: selectedGoogleAddress.terms[2].value,
          state: selectedGoogleAddress.terms[3].value,
          country: selectedGoogleAddress.terms[4].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      if (terms.length === 6) {
        // 4711 SW 25th St, West Park, FL 33023, USA
        address = {
          streetNumber: selectedGoogleAddress.terms[0].value, //Good
          streetName: selectedGoogleAddress.terms[1].value, //Good
          city: selectedGoogleAddress.terms[2].value,
          state: selectedGoogleAddress.terms[3].value,
          country: selectedGoogleAddress.terms[5].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      if (terms.length === 7) {
        // 256 North Main Street l 7, Andover, MA 01810, USA
        address = {
          streetNumber: selectedGoogleAddress.terms[0].value, //Good
          streetName: `${selectedGoogleAddress.terms[1].value} ${selectedGoogleAddress.terms[2].value}`, //Good
          city: selectedGoogleAddress.terms[3].value,
          state: selectedGoogleAddress.terms[4].value,
          country: selectedGoogleAddress.terms[6].value,
          zip: checkIfValidZip(
            addressComponents[addressComponents.length - 2].long_name
          ),
        };
      }

      address.fullAddress = `${address.streetNumber} ${address.streetName}, ${address.city} ${address.state} ${address.zip}`;

      if (checkIfValidZip(address.zip)) {
        setIsEditing(false);
      } else {
        setIsEditing(true);
      }
      change(`${props.name}.address`, address);
    });
  };

  const clearDataHandler = () => {
    setIsEditing(false);
    change(`${props.name}`, undefined);
  };

  const customAddressHandler = () => {
    setIsEditing(true);
    change(`${props.name}`, {
      address: {},
    });
  };

  const handleAccordianClick = (data) => {
    if (isEditing) setIsEditing(false);
    if (!isEditing) setIsEditing(true);
  };

  const handleCustomAddressFieldChange = (name, val) => {
    let parsedName = name.match(/\.\S+/g).map((e) => e.substr(9));

    let updatedCombinedAddress = getObjectValueFromStringPath(
      values,
      `${props.name}.address`
    );

    updatedCombinedAddress[parsedName] = val;
    const updatedFullAddress = `${updatedCombinedAddress.streetNumber} ${updatedCombinedAddress.streetName}, ${updatedCombinedAddress.city} ${updatedCombinedAddress.state} ${updatedCombinedAddress.zip}, ${updatedCombinedAddress.country}`;
    change(`${props.name}.address.fullAddress`, updatedFullAddress);
  };

  const clearAddressButton = (
    <div
      id="clear"
      style={{ display: "flex", justifyContent: "flex-end" }}
      className="button-container"
    >
      <button onClick={clearDataHandler} type="button">
        <span>Clear Address</span>
      </button>
    </div>
  );

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

  console.log(
    "CGECJ",
    isNil(getObjectValueFromStringPath(values, `${props.name}.address`))
  );
  return (
    <FormGroup bottomBorder={props.bottomBorder} noMargin>
      <FormField
        fieldLabel={props.fieldLabel}
        noMargin={props.noMargin}
        id="address-autofill"
      >
        {isNil(getObjectValueFromStringPath(values, `${props.name}.address`)) &&
          !isEditing && (
            <Field
              validate={VALIDATOR_REQUIRE}
              name={"addressAutofill"}
              label="Address Address"
              component={GoogleAutofillComponent}
              // setSelectedAddress={setSelectedAddress}
              findAdditionalAddressInformation={
                findAdditionalAddressInformation
              }
              customAddressHandler={customAddressHandler}
              {...props}
            />
          )}
        {(!isNil(
          getObjectValueFromStringPath(values, `${props.name}.address`)
        ) ||
          isEditing) && (
          <Accordion
            id="all-fields-accordian"
            expanded={
              isEditing &&
              getObjectValueFromStringPath(values, `${props.name}.address`) !==
                undefined
            }
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
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
                <GridItem size={3}>
                  <Field
                    name={`${props.name}.address.streetNumber`}
                    label="Number"
                    validate={VALIDATOR_REQUIRE}
                    parse={parseNumber}
                    onChange={handleCustomAddressFieldChange}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={5}>
                  <Field
                    name={`${props.name}.address.streetName`}
                    label="Street"
                    validate={VALIDATOR_REQUIRE}
                    onChange={handleCustomAddressFieldChange}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.city`}
                    label="City"
                    validate={VALIDATOR_REQUIRE}
                    onChange={handleCustomAddressFieldChange}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.state`}
                    label="State"
                    validate={VALIDATOR_REQUIRE}
                    onChange={handleCustomAddressFieldChange}
                    component={SelectFieldComponent}
                    items={usaStateInitials}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.zip`}
                    label="Zip Code"
                    validate={VALIDATOR_REQUIRE_NO_MESSAGE}
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
                    onChange={handleCustomAddressFieldChange}
                    component={TextFieldComponent}
                  />
                </GridItem>
                <GridItem size={4}>
                  <Field
                    name={`${props.name}.address.country`}
                    label="Country"
                    validate={VALIDATOR_REQUIRE}
                    onChange={handleCustomAddressFieldChange}
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
    // </FormGroup>
  );
};

const GoogleAutofillComponent = (props) => {
  const [showCustomButton, setShowCustomButton] = useState(false);
  // console.log("props", props.meta.touched);
  return (
    <>
      {showCustomButton && (
        <div id="custom-address" className="button-container">
          <button onClick={props.customAddressHandler} type="button">
            I can't find my address
          </button>
        </div>
      )}
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
        selectProps={{
          className: `autofill-input-wrapper custom-required-input ${
            props.meta.error && props.meta.touched && "required-error"
          }`,
          onInputChange: (e) => {
            console.log("input", e.length);
            if (e.length >= 1) {
              setShowCustomButton(true);
            }
          },
          onChange: (e) => {
            console.log("GooglePlaces", e);
            setShowCustomButton(true);
            props.findAdditionalAddressInformation(e);
            // props.setSelectedAddress(e.value);
            // props.setSelectedAddress(e.value);
          },
          ...props,
        }}
      />
      {props.meta?.error && props.meta?.touched && (
        <span className="error">
          {props.errorMessage || "Address is required"}
        </span>
      )}
    </>
  );
};
export default AddressAutofillField;
