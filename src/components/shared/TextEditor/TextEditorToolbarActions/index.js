import React from "react";
import "./TextEditorToolbarActions.css";
import {
  FormatBold,
  FormatColorFill,
  FormatItalic,
  FormatUnderlined,
  Highlight,
  StrikethroughS,
  TextDecrease,
  TextIncrease,
} from "@mui/icons-material";
import TextEditorToolbarActionButton from "../TextEditorToolbarActionButton";
import { Button, Divider } from "@mui/material";
import { LoadingButton } from "@mui/lab";
const TextEditorToolbarActions = (props) => {
  const {
    isLoading,
    bold,
    italic,
    underline,
    highlight,
    strikethrough,
    handleInlineStyleClick,
    color,
    fontIncrease,
    fontDecrease,
    editorState,
    handleSubmit,
  } = props;

  const handleIconClick = (style) => {
    // console.log(e.target.id);
    handleInlineStyleClick(style);
  };

  const currentStyle = editorState?.getCurrentInlineStyle();

  return (
    <div className="text-editor__toolbar">
      <div className="toolbar__format-actions">
        {!bold && (
          <TextEditorToolbarActionButton
            id="format-button"
            type="button"
            active={currentStyle.has("BOLD") ? true : false}
            className="editor-toolbar-button center"
            // onClick={this._onBoldClick.bind(this)}
            onClick={() => handleIconClick("BOLD")}
            label="Bold"
          >
            <FormatBold />
          </TextEditorToolbarActionButton>
        )}
        {!italic && (
          <TextEditorToolbarActionButton
            id="format-button"
            type="button"
            active={currentStyle.has("ITALIC") ? true : false}
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("ITALIC")}
            label="Italic"
          >
            <FormatItalic />
          </TextEditorToolbarActionButton>
        )}
        {!underline && (
          <TextEditorToolbarActionButton
            id="format-button"
            type="button"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("UNDERLINE")}
            active={currentStyle.has("UNDERLINE") ? true : false}
            label="Underline"
          >
            <FormatUnderlined />
          </TextEditorToolbarActionButton>
        )}
        {!strikethrough && (
          <TextEditorToolbarActionButton
            id="strikethrough"
            type="button"
            active={currentStyle.has("STRIKETHROUGH") ? true : false}
            label="Strikethrough"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("STRIKETHROUGH")}
          >
            <StrikethroughS />
          </TextEditorToolbarActionButton>
        )}
      </div>
      <Divider orientation="vertical" flexItem />
      <div id="colors" className="toolbar__format-actions">
        {!highlight && (
          <TextEditorToolbarActionButton
            id="highlight"
            type="button"
            active={currentStyle.has("HIGHLIGHT") ? true : false}
            label="Highlight"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("HIGHLIGHT")}
          >
            <Highlight />
          </TextEditorToolbarActionButton>
        )}

        {!color && (
          <TextEditorToolbarActionButton
            id="color"
            type="button"
            active={currentStyle.has("RED") ? true : false}
            label="Make Text Red"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("RED")}
          >
            <FormatColorFill />
          </TextEditorToolbarActionButton>
        )}
        {!fontIncrease && (
          <TextEditorToolbarActionButton
            id="text-decrease"
            type="button"
            active={currentStyle.has("TEXT_DECREASE") ? true : false}
            label="Decrease Text Size"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("TEXT_DECREASE")}
          >
            <TextDecrease />
          </TextEditorToolbarActionButton>
        )}
        {!fontDecrease && (
          <TextEditorToolbarActionButton
            id="text-increase"
            type="button"
            active={currentStyle.has("TEXT_INCREASE") ? true : false}
            label="Increase Text Size"
            className="editor-toolbar-button center"
            onClick={() => handleIconClick("TEXT_INCREASE")}
          >
            <TextIncrease />
          </TextEditorToolbarActionButton>
        )}
      </div>
      {props.additionalActions && (
        <div className="additional-actions">{props.additionalActions}</div>
      )}
      {handleSubmit && (
        <LoadingButton
          // loading={true}
          loading={isLoading}
          sx={{ fontSize: ".7rem", padding: "6px", width: "130px" }}
          variant="contained"
          // type="button"
          // className="submit-button editor-toolbar-button "
          onClick={handleSubmit}
        >
          {props.submitButtonText ? props.submitButtonText : "Add Comment"}
        </LoadingButton>
      )}
    </div>
  );
};

export default TextEditorToolbarActions;
