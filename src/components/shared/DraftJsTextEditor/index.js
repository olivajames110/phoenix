import createDividerPlugin from "@draft-js-plugins/divider";
import Editor from "@draft-js-plugins/editor";
import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from "draft-js";
import { isNil } from "lodash";

import React, { useEffect, useState } from "react";
import TextEditorToolbarActions from "../TextEditor/TextEditorToolbarActions";
import { DraftJsStyleMap } from "./DraftJsStyleMap";
import "./DraftJsTextEditor.css";

const _ = require("lodash");

const DraftJsTextEditor = ({
  data,
  readOnly,
  onSubmit,
  isLoading,
  name,
  hideOptions,
  onChange,
}) => {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const [isModified, setIsModified] = useState(false);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dividerPlugin = createDividerPlugin();

  //Editor Commands
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      // onChange(newState);
      return "handled";
    }
  };

  const handleInlineStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  //Functions

  const handleOnChange = (newState) => {
    if (pageIsLoaded) {
      setEditorState(newState);

      onChange(newState);
    } else {
      setPageIsLoaded(true);
    }
  };

  useEffect(() => {
    // if (readOnly) {
    //   console.log("DRAFT JS STATE: ", data);
    // }
    // const isJsonString = (str) => {
    //   try {
    //     JSON.parse(str);
    //   } catch (e) {
    //     return false;
    //   }
    //   return true;
    // };
    // if (isNil(data) || !isJsonString(data)) {
    //   return;
    // }
    // const contentState = convertFromRaw(JSON.parse(data));
    // const parsedEditorState = EditorState.createWithContent(contentState);
    console.log("data");
    if (isNil(data)) {
      return;
    }
    setEditorState(data);
  }, [data]);

  const footStyles_default = {
    borderTop: "var(--border)",
    display: "flex",
    justifyContent: hideOptions ? "flex-end" : "space-between",
    alignItems: "center",
    flexGrow: 0,
  };

  const footerStyles = {
    isReadOnly: {
      ...footStyles_default,
      // justifyContent: "flex-end",
    },
    isNotReadOnly: {
      ...footStyles_default,
      padding: "5px",
      // justifyContent: "space-between",
    },
  };

  return (
    <Box
      sx={{
        border: readOnly ? "none" : "var(--border)",
        borderRadius: "4px",
        height: "100%",
        width: "100%",
        minHeight: readOnly ? "max-content" : "140px",
        ".public-DraftEditor-content": {
          padding: readOnly ? 0 : "10px",
        },
      }}
      className="draft-js-root-container"
    >
      <Editor
        key={name}
        customStyleMap={DraftJsStyleMap}
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={handleOnChange}
        placeholder={readOnly ? false : "Start typing here..."}
        plugins={[dividerPlugin]}
        readOnly={readOnly}
      />
      {readOnly ? null : (
        <Box sx={footerStyles[readOnly ? "isReadOnly" : "isNotReadOnly"]}>
          {readOnly || hideOptions ? null : (
            <TextEditorToolbarActions
              editorState={editorState}
              handleInlineStyleClick={handleInlineStyleClick}
            />
          )}
        </Box>
      )}
    </Box>
  );

  // return (
  //   <>
  //     <div id={props.id} className={`freeform-text-editor`}>
  //       <div className="freeform-text-editor__overflow-wrapper">
  //         <div className="overflow-inner-wrapper">
  //           {getRequestIsLoading ? (
  //             <div className="message-loader">
  //               <SpinnerCircular
  //                 size={60}
  //                 thickness={50}
  //                 speed={120}
  //                 color="#235685"
  //                 secondaryColor={"#cfcfcf"}
  //               />
  //             </div>
  //           ) : (
  //             <Editor
  //               customStyleMap={styleMap}
  //               editorState={editorState}
  //               handleKeyCommand={handleKeyCommand}
  //               onChange={handleOnChange}
  //               placeholder="There are currently no notes for this deal yet."
  //               plugins={[dividerPlugin]}
  //               readOnly={
  //                 userType === userTypes.UNDERWRITER ||
  //                 userType === userTypes.ADMIN
  //                   ? false
  //                   : true
  //               }
  //             />
  //           )}
  //         </div>
  //       </div>

  //       <footer className="text-editor__sub-toolbar  ">
  //         <TextEditorToolbarActions
  //           editorState={editorState}
  //           handleInlineStyleClick={handleInlineStyleClick}
  //         />

  //         <div
  //           style={{
  //             justifyContent: isModified ? "space-between" : "flex-end",
  //           }}
  //           className="freeform-editor-submit-button-wrapper between"
  //         >
  //           {isModified && (
  //             <span className="unsaved-changes">There are unsaved changes</span>
  //           )}
  //           <LoadingButton
  //             loading={isLoading}
  //             // loadingPosition="start"
  //             onClick={() => handleSubmitSave(editorState)}
  //             endIcon={<Save />}
  //             variant="contained"
  //           >
  //             Save
  //           </LoadingButton>
  //         </div>
  //       </footer>
  //     </div>
  //   </>
  // );
};

export default DraftJsTextEditor;
