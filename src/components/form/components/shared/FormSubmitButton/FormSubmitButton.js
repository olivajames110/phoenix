import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import React from "react";
import { SpinnerCircular, SpinnerDotted } from "spinners-react";
import FormField from "../FormField/FormField";
import "./FormSubmitButton.css";

const FormSubmitButton = (props) => {
  // <FormField noMargin={props.noMargin}>
  // </FormField>

  const loadingState = (
    <>
      {/* <span>
        {props.loadingButtonText ? props.loadingButtonText : "Submitting"}
      </span> */}
      <CircularProgress size={".8rem"} sx={{ color: "#ffffff" }} />
      {/* <SpinnerCircular size={20} thickness={50} speed={100} color="#ffffff" /> */}
    </>
  );
  const normalState = <>{props.normalState}</>;

  return (
    <LoadingButton
      style={props.style}
      onClick={props.onClick}
      id={props.id}
      disabled={props.disabled}
      type="submit"
      variant="contained"
      value="Submit"
      sx={{ marginTop: "15px", height: "52px " }}
      className={`form-submit-button ${props.className} `}
    >
      {props.isLoading ? loadingState : normalState}
      {!props.isLoading ? props.buttonText : null}
      {props.children}
    </LoadingButton>
  );
};

export default FormSubmitButton;
