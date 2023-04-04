import React from "react";
import "./InputTable.css";

const InputTable = (props) => {
  return (
    <div className="input-table-outer-wrapper">
      <table
        id={props.id}
        style={{ tableLayout: props.auto ? "auto" : "fixed" }}
        className={`input-table ${props.styled && "styled"} ${
          props.staticRows && "static-rows"
        }`}
      >
        {props.children}
      </table>
    </div>
  );
};

export default InputTable;
