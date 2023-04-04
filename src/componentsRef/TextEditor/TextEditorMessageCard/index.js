import { Box, IconButton, Popover } from "@mui/material";
import React, { useEffect, useState } from "react";

import { CloseOutlined, MoreVert, ReplyOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { parseISOToDateTime } from "../../../../helpers/parseISOToDateTime";
import PopoverButton from "../../Popover/PopoverButton";
import PopoverList from "../../Popover/PopoverList";
import TextEditor from "../../TextEditor";
import "./TextEditorMessageCard.css";
import { isNil } from "lodash";

const TextEditorMessageCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isStip, setIsStip] = useState(false);
  const user = useSelector((state) => state.user);
  const borrowerProfile = useSelector((state) => state.borrowerProfile);
  const globalData = useSelector((state) => state.globalData);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "comment-popover" : undefined;

  const handleReply = () => {
    setAnchorEl(null);
    props.addReply(props.comment._id);
  };
  const handleEdit = () => {
    setIsEditing(true);
    setAnchorEl(null);
  };
  const handleCancel = () => {
    // setIsEditing(false);
    // console.log("Card cancel edit");
    setAnchorEl(null);
    if (props.isReply) {
      props.removeReply();
      return;
    }
    setIsEditing(false);
    // props.handleResetCommentList();
  };

  const handleCardSubmit = (newComment) => {
    // console.log("newComment", newComment);
    setIsEditing(false);
    props.onSubmit(newComment);
  };

  const popover = (
    <Popover
      id={id}
      className="custom-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
    >
      <PopoverList>
        <PopoverButton onClick={handleReply} icon={<ReplyOutlined />}>
          Reply
        </PopoverButton>
      </PopoverList>
    </Popover>
  );

  useEffect(() => {
    if (props.isReply) {
      setIsEditing(true);
    }
  }, [props.isReply]);

  const getEmployeeFullNameFromEmail = (email) => {
    if (
      email === undefined ||
      email === null ||
      globalData.employees === undefined
    ) {
      return "Unknown";
    }
    let employees = globalData.employees;

    let filteredEmployee = employees.filter((e) => e.emailAddress === email);
    // console.log(filteredEmployee);
    if (filteredEmployee.length > 0) {
      return filteredEmployee[0].fullName;
    } else {
      return "Unknown";
    }
  };

  return (
    <article
      // style={{ paddingBottom: !isEditing ? "0px" : "12px" }}
      className={`comment-message  ${isEditing && "is-editing"} ${
        isStip && "is-stip"
      } ${props.isReply && "is-reply"}`}
    >
      {popover}

      <header className="message__header">
        <div className="message-header__user">
          {props.isReply
            ? `${user.emailAddress}`
            : getEmployeeFullNameFromEmail(props.comment.postedBy)}
        </div>
        {
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div className="message-header__date">
              {isNil(props.comment.posted)
                ? null
                : parseISOToDateTime(props.comment.posted)}
            </div>
            <IconButton
              type="button"
              aria-describedby={id}
              variant="contained"
              className="popover-view-more-button"
              onClick={isEditing ? handleCancel : handleClick}
            >
              {isEditing ? (
                <CloseOutlined sx={{ display: "block", fontSize: "1rem" }} />
              ) : (
                <MoreVert sx={{ display: "block", fontSize: "1rem" }} />
              )}
            </IconButton>
            {/* {isEditing ? (
              <IconButton
                type="button"
                aria-describedby={id}
                variant="contained"
                className="popover-view-more-button"
                onClick={isEditing ? handleCancel : handleClick}
              >
                {isEditing ?  <CloseOutlined sx={{ display: "block", fontSize: "1rem" }} /> :   <MoreVert sx={{ display: "block", fontSize: "1rem" }} />}
              </IconButton>
            ) : (
              <button
                type="button"
                aria-describedby={id}
                variant="contained"
                className="popover-view-more-button"
                onClick={handleClick}
              >
                <MoreVert sx={{ display: "block", fontSize: "1rem" }} />
              </button>
            )} */}
          </Box>
        }
      </header>

      <div className="message__body">
        <TextEditor
          onSubmit={handleCardSubmit}
          // onSubmit={props.onSubmit}
          message={props.message}
          isEditing={isEditing}
          isReply={props.isReply}
          parentId={props.parentId}
          submitButtonText={isEditing ? "Save" : "Save Reply"}
          deal={props.deal}
          {...props}
        />
      </div>
    </article>
  );
};

export default TextEditorMessageCard;
// const readOnlyMessage = (
//   <>
//     <header className="message__header">
//       <div className="message-header__user">{props.comment.postedBy}</div>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <div className="message-header__date">4/12/2022</div>
//         <button
//           aria-describedby={id}
//           variant="contained"
//           className="popover-view-more-button"
//           onClick={handleClick}
//         >
//           <MoreVert />
//         </button>
//       </Box>
//     </header>
//     {props.isReply && <div className="reply-line"></div>}
//     <div className="message__body">
//       <TextEditor
//         message={props.message}
//         // onSubmit={props.onSubmit}
//         isEditing={isEditing}
//         isReply={props.isReply}
//         // parentId={props.parentId}
//         deal={props.deal}
//       />
//     </div>
//   </>
// );
// const replyMessage = (
//   <>
//     <header className="message__header">
//       <div className="message-header__user">
//         {`${borrowerProfile.firstName} ${borrowerProfile.lastName}`} (PID:
//         {props.parentId})
//       </div>
//     </header>
//     {props.isReply && <div className="reply-line"></div>}

//     <TextEditor
//       // message={props.message}
//       deal={props.deal}
//       parentId={props.parentId}
//       // onSubmit={props.onSubmit}
//       isEditing={true}
//     />
//   </>
// );
