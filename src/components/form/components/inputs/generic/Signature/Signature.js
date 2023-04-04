import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { clear } from "react-signature-canvas";

import FormField from "../../../shared/FormField/FormField";
import FormLabel from "../../../shared/FormLabel/FormLabel";
import FormGroup from "../../../shared/FormGroup/FormGroup";
import { ReactComponent as Cross } from "../../../../../../assets/svgs/cross.svg";
import { useDispatch, useSelector } from "react-redux";

import { updateDocuments } from "../../../../../../redux/actions/documentsActions";
import { Field, useForm, useFormState } from "react-final-form";
import { FormHelperText, OutlinedInput } from "@mui/material";
import "./Signature.css";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";

const Signature = (props) => {
  // const [signature, setSignature] = useState("s");
  // const sigRef = useRef(null);
  // const dispatch = useDispatch();

  return (
    <FormField fieldLabel={props.label} id="form-signature">
      <Field
        validate={VALIDATOR_REQUIRE}
        name={props.name}
        component={SignatureInput}
        {...props}
      />
      {/* <Field
        name={props.name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      /> */}
    </FormField>
  );
};
function SignatureInput({ required, input, ...props }) {
  const sigRef = useRef(null);
  const { submitFailed, values } = useFormState();
  const { change } = useForm();
  console.log("props", props);
  const trimHandler = () => {
    console.log("props", props);
    let canvas = sigRef.current.getCanvas();
    // console.log("asd", canvas.toDataURL());
    // let file;
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      let file = new File([blob], `signature.png`, {
        path: url,
        webkitRelativePath: "image/png",
      });
      // console.log("url");
      // console.log("file", file);
      input.onChange(file);
      // change("signaturee", file);
      // input.onChange(file);
    }, "image/png");

    let sig = sigRef.current.getTrimmedCanvas().toDataURL("image/png");
    // change(signature_b, sig);
    change(`signature_b64`, sig);
    console.log("handler", sig);
    // ------

    // console.log("fileee", file);
    // input.onChange(file);
    // setSignature(sig);
  };

  const clearSignatureHandler = () => {
    sigRef.current.clear();
    change(`signature_b64`, undefined);
  };

  const convertDataUrlToFile = (val) => {};

  return (
    <>
      <div id="signature-wrapper" title={props.label}>
        <SignatureCanvas
          penColor="#235685"
          ref={sigRef}
          onEnd={trimHandler}
          canvasProps={{ height: 160, className: "sigCanvas" }}
          {...props}
        />

        <div className="signature-line">
          <div className="cross">
            <Cross />
          </div>
          <div className="line" />
        </div>
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        {props.isRequired &&
          submitFailed &&
          values.signature_b64 === undefined && (
            <span className="error">Required</span>
          )}
      </div>
      <div className="clear-signature-button">
        <button id="clear" type="button" onClick={clearSignatureHandler}>
          Clear Signature
        </button>
      </div>
    </>
  );
}
export default Signature;
