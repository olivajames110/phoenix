import React, { useEffect, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "./TextEditor.css";

import TextEditorToolbarActions from "./TextEditorToolbarActions";
import { usePostRequest } from "../../../hooks/helpers/usePostRequest";

import { apiEndpoints } from "../../../global/api/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import { loopHooks } from "react-table";
import { stateFromHTML } from "draft-js-import-html";
import { globalAlertFail } from "../../../redux/actions/globalAlertActions";
import { useAxiosHook } from "../../../hooks/useAxiosHook";

// const TextEditor = (props) => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   return <Editor editorState={editorState} handleKeyCommand={this.handleKeyCommand} onChange={setEditorState} />;
// };

const TextEditor = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.user);
  const [initEditorState, setInitEditorState] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // const { isLoading, error, sendRequest, clearError } = usePostRequest();
  const { axiosPostIsLoading, axiosPostRequest } = useAxiosHook();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    // console.log(newState);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
  };
  const editorRef = React.useRef(null);

  const handleOnChange = (newState) => {
    const currentContentState = editorState.getCurrentContent();
    const newContentState = newState.getCurrentContent();
    // setHasUnsavedContent(true);
    if (currentContentState !== newContentState) {
      console.log("There was a change in the content  ");

      // There was a change in the content
    } else {
      console.log("The change was triggered by a change in focus/selection ");
      // The change was triggered by a change in focus/selection
    }
    setEditorState(newState);
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const handleFocus = () => {
    editorRef.current.focus();
  };

  const handleSubmitSave = async () => {
    let stateHasContent = editorState.getCurrentContent().hasText();

    if (!stateHasContent) {
      if (props.onFail) {
        props.onFail();
      }
      return;
    }
    const convertedEditorStateData = editorState.getCurrentContent();
    const editierStateJSON = JSON.stringify(
      convertToRaw(convertedEditorStateData)
    );

    let state;

    console.log("props", props);
    if (props.parentId) {
      // console.log("Is reply");
      state = {
        dealId: props.deal._id,
        data: editierStateJSON,
        replyTo: props.parentId,
      };
    } else {
      // console.log("Is parent");
      state = {
        dealId: props.deal._id,
        data: editierStateJSON,
      };
    }

    const onSuccessFn = (responseData) => {
      if (props.onSubmit) {
        const newComment = {
          _id: responseData._id,
          dealId: props.deal._id,
          data: editierStateJSON,
          posted: new Date().toISOString(),
          postedBy: user.emailAddress,
          replyTo: props.parentId === undefined ? null : props.parentId,
          type: "comment",
        };
        console.log("newComment", newComment);
        props.onSubmit(newComment);
      }

      setEditorState(EditorState.createEmpty());
    };

    const params = {
      name: "Post Comment",
      path: apiEndpoints.notes.POST_COMMENT,
      payload: state,
      onSuccessFn,
    };

    await axiosPostRequest(params);
    // try {
    //   console.log("try comment save ->", state);

    //   const response = await sendRequest(
    //     apiEndpoints.notes.POST_COMMENT,
    //     state
    //   );

    //   console.log("Returned Response from form", response);

    //   if (!response.status === 200) {
    //     console.log("Failed Login", response);

    //     throw new Error(response);
    //   }

    //   if (response.status === 200) {
    //     console.log("SUCCESSFUL COMMENT submission", response);
    //     const responseData = await response.json();
    //     console.log("responseData", responseData);
    //     if (props.onSubmit) {
    //       const newComment = {
    //         _id: responseData._id,
    //         dealId: props.deal._id,
    //         data: editierStateJSON,
    //         posted: new Date().toISOString(),
    //         postedBy: user.emailAddress,
    //         replyTo: props.parentId === undefined ? null : props.parentId,
    //         type: "comment",
    //       };
    //       console.log("newComment", newComment);
    //       props.onSubmit(newComment);
    //     }

    //     setEditorState(EditorState.createEmpty());
    //     return;
    //   }
    // } catch (error) {
    //   console.log("UW notes fetch error", error);
    //   dispatch(globalAlertFail("Could not post comment"));
    //   setShowSuccess(false);
    // }
  };

  useEffect(() => {
    setIsEditing(props.isEditing);
    if (isEditing && !props.isEditing) {
      setEditorState(initEditorState);
      setIsEditing(false);
    }
  }, [props.isEditing]);

  useEffect(() => {
    if (props.comment !== undefined) {
      if (props.comment.htmlData !== undefined) {
        console.log("html state");
        let html = `${props.comment.htmlData}`;
        let contentState = stateFromHTML(html);
        const parsedEditorState = EditorState.createWithContent(contentState);
        setEditorState(parsedEditorState);
        return;
      }
      // if (props.deal.comment[0].htmlData === undefined) {
      if (props.message) {
        const contentState = convertFromRaw(JSON.parse(props.message));
        const parsedEditorState = EditorState.createWithContent(contentState);
        setInitEditorState(parsedEditorState);
        setEditorState(parsedEditorState);
      }
    }
  }, []);

  return (
    <>
      <div
        id={props.id}
        onClick={handleFocus}
        className={`text-editor ${!props.isEditing && "read-only"} ${
          props.primary && "primary"
        }`}
      >
        <Editor
          ref={editorRef}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleOnChange}
          readOnly={!props.isEditing}
          placeholder="Enter message"
        />
        {props.toolbarSubContent && (
          <div className="text-editor__sub-toolbar">
            {props.toolbarSubContent}
          </div>
        )}

        {props.isEditing && (
          <TextEditorToolbarActions
            isLoading={axiosPostIsLoading}
            primaryTextEditor
            highlight
            color
            fontIncrease
            fontDecrease
            strikethrough
            editorState={editorState}
            submitButtonText={props.submitButtonText}
            handleSubmit={handleSubmitSave}
            onBoldClick={onBoldClick}
            onItalicClick={onItalicClick}
            onUnderlineClick={onUnderlineClick}
          />
        )}
      </div>
    </>
  );
};
export default TextEditor;
