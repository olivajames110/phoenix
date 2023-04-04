import { ChevronLeft } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import FlatIronLogo from "../../shared/FlatIronLogo";

import "./UserAuthFormCard.css";

const UserAuthFormCard = (props) => {
  return (
    <article id="user-auth-form-card">
      <div className="form-outer-wrapper">
        <header className="form__header">
          {!props.hideBackButton ? (
            <Tooltip
              arrow
              placement="top"
              title={props.returnLabel ? props.returnLabel : "Back to login"}
            >
              <button
                onClick={() => props.onReturn()}
                className="return-button"
              >
                <ChevronLeft />
              </button>
            </Tooltip>
          ) : null}
          <FlatIronLogo />
          <div className="form-header-title-container">
            {props.title ? <h1>{props.title}</h1> : null}
            {props.description ? <p>{props.description}</p> : null}
          </div>
        </header>

        <div className="form__body">{props.children}</div>
      </div>
    </article>
  );
};

export default UserAuthFormCard;

// old
// <Form
//   customFormTypes={{ userType: "borrower" }}
//   hideButton
//   id="login"
//   initialValues={formState}
//   onClick={isExistingUser ? handleUserLogin : handleCreateUser}
// >
//   {isExistingUser ? <ExistingBorrowForm /> : <NewBorrowerForm />}

//   <div className="form__buttons">
//     {isExistingUser && (
//       <div className="reset-buttons-container">
//         <div className="remember-user">
//           <FormControlLabel
//             control={
//               <Checkbox
//                 value={rememberMeIsValid}
//                 onChange={() => setRememberMeIsValid((s) => !s)}
//                 size="small"
//               />
//             }
//             label="Remeber Me"
//           />
//         </div>

//         <button
//           className="underline-ghost-button"
//           id="forgot-password"
//         >
//           Forgot Password
//         </button>
//       </div>
//     )}
//     <FormSubmitButton
//       noMargin
//       buttonText={isExistingUser ? "Sign In" : "Create new account"}
//     />

//     {requestFailed.status && (
//       <div
//         style={{
//           color: "var(--red)",
//           textAlign: "center",
//           marginTop: "5px",
//         }}
//       >
//         {requestFailed.message}
//       </div>
//     )}
//     <div className="existing-user-container">
//       <span>
//         {isExistingUser
//           ? "Don't have an account?"
//           : "Already have an account?"}
//       </span>
//       <button
//         onClick={
//           isExistingUser ? toggleToNewUser : toggleToExistingUser
//         }
//         className="underline-ghost-button"
//       >
//         {isExistingUser ? "Create new account" : "Sign in"}
//       </button>
//     </div>
//   </div>
// </Form>
