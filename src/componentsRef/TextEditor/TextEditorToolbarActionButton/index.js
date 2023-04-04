import { Tooltip } from "@mui/material";
import React from "react";
import "./TextEditorToolbarActionButton.css";

const TextEditorToolbarActionButton = (props) => {
  return (
    <Tooltip arrow placement="top" title={props.label}>
      <button
        id={props.id}
        type={props.submit ? "submit" : "button"}
        className={`text-editor-toolbar-button center ${
          props.active ? "active" : ""
        }`}
        // onClick={this._onBoldClick.bind(this)}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Tooltip>
  );
};

export default TextEditorToolbarActionButton;
