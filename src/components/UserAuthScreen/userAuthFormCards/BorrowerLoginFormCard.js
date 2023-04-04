import { Button } from "@mui/material";
import React, { useState } from "react";
import UserAuthBorrowerMagicLinkLoginForm from "../../../forms/UserAuthBorrowerMagicLinkLoginForm";

import UserAuthFormCard from "../UserAuthFormCard";

const BorrowerLoginFormCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const handleOnSuccess = (email) => {
    setIsSuccess(true);
    setUserEmail(email);
    // resetLocalStorage();
  };
  return (
    <UserAuthFormCard
      title={isSuccess ? "Magic Link Sent!" : "Borrower Login"}
      description={
        isSuccess
          ? `We sent an email to ${userEmail}`
          : "Enter your email address  to receive a login link."
      }
      setFormType={props.setFormType}
      hideBackButton
      formType={props.formType}
    >
      {/* <UserAuthBorrowerStytchLoginForm onSuccess={handleOnSuccess} /> */}
      <UserAuthBorrowerMagicLinkLoginForm onSuccess={handleOnSuccess} />
      <div
        style={{ marginTop: "10px" }}
        id="create-account-button-container"
        className="center"
      >
        <span>New to Flatiron? </span>
        <Button
          id="create-user"
          className="alt-login-button"
          onClick={() => props.setIsLogin(false)}
          type="button"
        >
          Create an Account
        </Button>
      </div>
    </UserAuthFormCard>
  );
};

export default BorrowerLoginFormCard;
