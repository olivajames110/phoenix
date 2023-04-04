import { Button } from "@mui/material";
import React, { useState } from "react";

import UserAuthBorrowerMagicLinkForm from "../../../../forms/UserAuthBorrowerLoginForm";
import UserAuthBrokerLoginForm from "../../../../forms/UserAuthBrokerLoginForm";
import { resetLocalStorage } from "../../../../helpers/resetLocalStorage";
import UserAuthFormCard from "../UserAuthFormCard";

const BrokerLoginFormCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const handleOnSuccess = (email) => {
    setIsSuccess(true);
    setUserEmail(email);
    // resetLocalStorage();
  };
  return (
    <UserAuthFormCard
      title={isSuccess ? "Magic Link Sent!" : "Flatiron Broker Login"}
      description={
        isSuccess
          ? `We sent an email to ${userEmail}`
          : "Enter your email address  to receive a login link."
      }
      setFormType={props.setFormType}
      hideBackButton
      formType={props.formType}
    >
      <UserAuthBrokerLoginForm onSuccess={handleOnSuccess} />
      {/* <div
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
      </div> */}
    </UserAuthFormCard>
  );
};

export default BrokerLoginFormCard;
