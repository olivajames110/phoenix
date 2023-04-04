import { SaveRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm, useFormState } from "react-final-form";
import { useSelector } from "react-redux";
import FixedBanner from "../../FixedBanner";
import SnackbarAlert from "../../SnackbarAlert/SnackbarAlert";

const EditedFieldsFixedToolbar = (props) => {
  const { values } = useFormState();
  const { change } = useForm();
  const formData = useSelector((state) => state.formData);
  const handleReset = () => {
    change(values, formData);
    props.onClose();
  };
  return (
    <FixedBanner
      numSelected={Object.keys(props.updatedValues).length}
      onClose={handleReset}
    >
      <LoadingButton
        loading={props.isLoading}
        onClick={props.onClick}
        // color="success"
        variant="outlined"
        endIcon={<SaveRounded />}
      >
        Save Modifications
      </LoadingButton>
    </FixedBanner>
  );
};

export default EditedFieldsFixedToolbar;
