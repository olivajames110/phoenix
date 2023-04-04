import createDividerPlugin from "@draft-js-plugins/divider";
import Editor from "@draft-js-plugins/editor";
import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from "draft-js";
import { isNil } from "lodash";
import React, { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userTypes } from "../../../../global/userTypes";
import { useAxiosHook } from "../../../../hooks/useAxiosHook";
import { updateFormData } from "../../../../redux/actions/formDataActions";
import { globalAlertSuccess } from "../../../../redux/actions/globalAlertActions";
import { DraftJsStyleMap } from "../../DraftJsTextEditor/DraftJsStyleMap";

import TextEditorToolbarActions from "../TextEditorToolbarActions";
import "./FreeformTextEditor.css";

const getConvertedDraftJsData = (data) => {
  //Data should be the draft js data object || ex) formData?.notes?.data
  if (isNil(data)) {
    return EditorState.createEmpty();
  }
  const contentState = convertFromRaw(JSON.parse(data));
  const parsedEditorState = EditorState.createWithContent(contentState);
  return parsedEditorState;
};

const FreeformTextEditor = (props) => {
  const { axiosPostIsLoading, axiosPostRequest } = useAxiosHook();
  const formData = useSelector((state) => state.formData);
  const memo_valueFromState = useMemo(
    () => formData?.notes?.data,
    [formData?.notes?.data]
  );
  const valueFromState = getConvertedDraftJsData(memo_valueFromState);
  const [editorState, setEditorState] = useState(valueFromState);
  const [isModified, setIsModified] = useState(false);

  const dispatch = useDispatch();

  const dividerPlugin = createDividerPlugin();
  const userType = useSelector((state) => state.userType);

  //Editor Commands
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
  };

  const handleInlineStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  //Functions
  const handleOnChange = (newState) => {
    let oldContent = editorState.getCurrentContent();
    let newContent = newState.getCurrentContent();
    if (oldContent !== newContent) {
      setIsModified(true);
    }
    setEditorState(newState);
  };

  const handleSubmitSave = async () => {
    const convertedEditorStateData = editorState.getCurrentContent();

    const editierStateJSON = JSON.stringify(
      convertToRaw(convertedEditorStateData)
    );
    const dealId = formData?._id;
    const ironId = formData?.ironId;
    const endpoint = `updateNotes?dealId=${dealId}&ironId=${ironId}`;

    const state = {
      dealId: formData._id,
      data: editierStateJSON,
    };
    console.log("FREEFORM EDITOR PAYLOAD -->", state);

    const onSuccessFn = (passedData) => {
      console.log("RETURN DATA", passedData);
      const updated = passedData?.dealUpdates?.dealUpdates;
      dispatch(updateFormData({ key: "dealUpdates", value: updated }));
      dispatch(globalAlertSuccess("Update Successful"));
      setIsModified(false);
    };

    const params = {
      name: "UW Notes",
      path: endpoint,
      payload: state,
      onSuccessFn,
    };

    await axiosPostRequest(params);
    // await axiosPostRequest(endpoint, state, onSuccess);
  };

  const handleResetChanges = () => {
    setEditorState(valueFromState);
    setIsModified(false);
  };

  return (
    <>
      <div id={props.id} className={`freeform-text-editor`}>
        <div className="freeform-text-editor__overflow-wrapper">
          <div className="overflow-inner-wrapper">
            <Editor
              customStyleMap={DraftJsStyleMap}
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={handleOnChange}
              placeholder="There are currently no notes for this deal yet."
              plugins={[dividerPlugin]}
              readOnly={
                userType === userTypes.UNDERWRITER ||
                userType === userTypes.ADMIN
                  ? false
                  : true
              }
            />
          </div>
        </div>

        <footer className="text-editor__sub-toolbar  ">
          <TextEditorToolbarActions
            editorState={editorState}
            handleInlineStyleClick={handleInlineStyleClick}
          />

          <LoadingButton
            loading={axiosPostIsLoading}
            onClick={handleSubmitSave}
            endIcon={<Save />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </footer>
        {isModified ? (
          <>
            <Box
              sx={{
                position: "absolute",
                bottom: "00px",
                zIndex: 111111,
                left: "0",
                width: "100%",
                // transform: "translateX(-50%)",
              }}
              gap={"10px"}
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="body1"
                color={"#ed6c02"}
                fontStyle="italic"
                fontSize=".7rem"
                className="unsaved-changes"
              >
                This has been modified
              </Typography>
              {/* <Button
                color="warning"
                sx={{ padding: "1px 4px", fontSize: ".7rem", fontWeight: 500 }}
                onClick={handleResetChanges}
                variant="outlined"
              >
                Reset Changes
              </Button> */}
            </Box>
          </>
        ) : null}
      </div>
    </>
  );
};

export default React.memo(FreeformTextEditor);
