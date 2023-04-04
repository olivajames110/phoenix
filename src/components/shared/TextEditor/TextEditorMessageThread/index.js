import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextEditorMessageCard from "../TextEditorMessageCard";

import "./TextEditorMessageThread.css";

const TextEditorMessageThread = (props) => {
  const [replies, setReplies] = useState([]);
  const [replyIsActive, setReplyIsActive] = useState(false);
  const [parentId, setParentId] = useState();
  const borrowerProfile = useSelector((state) => state.borrowerProfile);
  const user = useSelector((state) => state.user);
  const addReply = (id, parent) => {
    // console.log(id);
    setReplyIsActive(true);
    let spread = [...replies];
    let newComment = {
      dealId: props.deal._id,
      postedBy: user.emailAddress,
      parentId: parent,
      type: "reply",
      _id: id,
    };
    // spread.push(id);
    let addedReplyInProgress = [...spread, newComment];
    // setParentId(id);
    // console.log("addedReplyInProgress", addedReplyInProgress);
    setReplies(addedReplyInProgress);
  };
  const removeReply = (id) => {
    // console.log("Remove reply");
    setReplyIsActive(false);
    let spread = [...replies];
    spread.pop();
    setReplies(spread);
  };

  useEffect(() => {
    // console.log("COMMENT->", props.comment._id);
    if (props.comment?.replies?.length >= 1) {
      // console.log("filteredReplies", filteredReplies);
      // console.log("HAs replies", props.comment.replies);
      // console.log("props.comment._id", props.comment._id);
      setParentId(props.comment._id);
      setReplies(props.comment.replies);
    }
  }, []);

  return (
    <div
      // style={{ marginBottom: replies.length >= 1 ? "0px" : "8px" }}
      className="message-item-container"
    >
      {/* <div className="reply-line"></div> */}

      <TextEditorMessageCard
        key={props.key}
        deal={props.deal}
        comment={props.comment}
        parentId={props.comment._id}
        message={props.comment.data}
        isReply={props.isReply}
        // message={props.message}
        onSubmit={props.onSubmit}
        addReply={addReply}
        handleResetCommentList={props.handleResetCommentList}
        removeReply={props.removeReply}
        // parentId={props.parentId}
      />
      {/* {replyIsActive && (
        <div className="replies-container">
          <TextEditorMessageCard
            //  message={props.message}
            //  addReply={addReply}
            comment={props.comment}
            onSubmit={props.onSubmit}
            handleResetCommentList={props.handleResetCommentList}
            removeReply={removeReply}
            deal={props.deal}
            isReply={true}
            readOnly={false}
            parentId={props.comment._id}
          />
        </div>
      )} */}
      {replies.length >= 1 && (
        <div className="replies-container">
          <>
            {replies.map((r, index) => (
              <TextEditorMessageThread
                key={index}
                comment={r}
                message={r.data}
                parentId={r._id}
                onSubmit={props.onSubmit}
                addReply={() => addReply(parentId)}
                removeReply={removeReply}
                isReply={r.type === "reply" ? true : false}
                handleResetCommentList={props.handleResetCommentList}
                deal={props.deal}
              />
            ))}
          </>
        </div>
      )}
    </div>
  );
  // return replies.length >= 1 ? (
  //   messageWithReplies
  // ) : (
  //   <TextEditorMessageCard
  //     // onSubmit={handleMessageSubmit}
  //     comment={props.comment}
  //     addReply={addReply}
  //     message={props.message}
  //     // {...props}
  //   />
  // );
};

export default TextEditorMessageThread;
