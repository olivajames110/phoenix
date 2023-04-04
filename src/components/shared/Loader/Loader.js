import React from "react";
import { SpinnerCircular, SpinnerDotted } from "spinners-react";
import "./Loader.css";

const Loader = (props) => {
  const loaderStyles = {
    position: "relative",
    // height: '150px',
    ...props.style,
    width: props.size ? props.size : "unset",
    height: props.size ? props.size : "unset",
    margin: props.center ? "0 auto" : "unset",

    minHeight: props.height ? props.height : "unset",
  };

  const loaderContent = props.dotted ? (
    <SpinnerDotted
      size={props.size ? props.size : 70}
      thickness={100}
      speed={120}
      color="#235685"
      secondaryColor={"#cfcfcf"}
    />
  ) : (
    <SpinnerCircular
      size={props.size ? props.size : 70}
      thickness={100}
      speed={120}
      color="#235685"
      secondaryColor={"#cfcfcf"}
    />
  );
  return (
    <div id={props.id} style={loaderStyles} className="loader-wrapper">
      {props.block ? (
        loaderContent
      ) : (
        <div className="inner-wrapper">
          {loaderContent}
          {props.text && <p className="message">{props.text}</p>}
        </div>
      )}
    </div>
  );
};

export default Loader;
