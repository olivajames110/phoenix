import React from "react";
import RenderCount from "../components/RenderCount/RenderCount";
// import "./FormResults.css";
import ReactJson from "react-json-view";
const FormResults = (props) => {
  // return <ReactJson src={props.values} />;
  return (
    <pre
      style={{
        position: "relative",
        marginTop: props.full ? 0 : "20px",
        textAlign: "left",
        background: "#efefef",
        // padding: "10px",
        overflowX: "auto",
        maxHeight: props.full ? "unset" : "650px",
        ...props.style,
      }}
    >
      {props.rendercount ? <RenderCount /> : null}

      {props.formSpyRaw ? (
        JSON.stringify(props.values, undefined, 2)
      ) : (
        <ReactJson
          enableClipboard
          style={{ padding: "10px" }}
          theme={props.theme ? props.theme : "threezerotwofour"}
          displayDataTypes={false}
          src={props.values}
          collapsed={props.collapsed ? props.collapsed : 1}
          collapseStringsAfterLength={
            props.collapseStringsAfterLength
              ? props.collapseStringsAfterLength
              : 30
          }
        />
      )}
    </pre>
  );
};

export default FormResults;
