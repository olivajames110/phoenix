import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import TextEditorMessageCard from "../TextEditorMessageCard";
import TextEditorMessageThread from "../TextEditorMessageThread";
import "./TextEditorMessagesContainer.css";

const TextEditorMessagesContainer = (props) => {
  const [list, setList] = useState([]);
  const formData = useSelector((state) => state.formData);
  const bottomRef = useRef(null);
  const emptyContent = (
    <div style={{ paddingTop: "30px", opacity: 0.75 }} className="center empty">
      There are no comments for this deal.
    </div>
  );

  const comments =
    list !== undefined
      ? list?.length === 0
        ? emptyContent
        : list.map((m, i) => (
            // <div>
            //   test{i + 1} {m._id}
            // </div>
            <TextEditorMessageThread
              key={i}
              onSubmit={props.onSubmit}
              message={m.data}
              comment={m}
              handleResetCommentList={props.handleResetCommentList}
              isReply={false}
              deal={props.deal}
            />
          ))
      : null;
  useEffect(() => {
    console.log(
      "%c ----------- Target -----------",
      "background: #dbdf9c;",
      formData.comment
    );
    setList(formData.comment);
  }, [formData.comment]);

  useEffect(() => {
    if (props.isLoading) {
      setList([]);
    }
  }, [props.isLoading]);

  return (
    <div ref={bottomRef} className="text-editor-messages-container">
      {/* {props.deal.comment.length === 0 && (
        <div className="empty-messages">No comments yet</div>
      )} */}
      <div className="existing-comments-container">
        {props.isLoading ? <Loader size={32} /> : comments}
        {/* {props.comments.length === 0
          ? emptyContent
          : props.comments.map((m, i) => (
              // <div>
              //   test{i + 1} {m._id}
              // </div>
              <TextEditorMessageThread
                onSubmit={props.onSubmit}
                message={m.data}
                comment={m}
                handleResetCommentList={props.handleResetCommentList}
                isReply={false}
                deal={props.deal}
              />
            ))} */}
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default TextEditorMessagesContainer;
