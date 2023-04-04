import React, { useEffect, useState } from "react";
import UserAuthBorrowerCreateForm from "../../../../forms/UserAuthBorrowerCreateForm";
import UserAuthBrokerCreateForm from "../../../../forms/UserAuthBrokerCreateForm";
import UserAuthFormCard from "../UserAuthFormCard";
import { userAuthFormTypes } from "../UserAuthFormsSection/userAuthFormTypes";

const BrokerCreateFormCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const handleOnSuccess = (email) => {
    setIsSuccess(true);
    setUserEmail(email);
  };
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        props.setFormType(userAuthFormTypes.USER_LOGIN);
        // let origin = window.location.origin;
        // let pathname = "/login";
        // let fullUrl = `${origin}${pathname}`;
        // window.location = window.location = fullUrl;
      }, 2000);
    }
  }, [isSuccess]);
  return (
    <UserAuthFormCard
      title={isSuccess ? "Account Created!" : "Broker Account Creation"}
      description={
        isSuccess
          ? ` We sent a confirmation email to ${userEmail}. Please confirm this is you.`
          : "Enter your email address  to receive a login link."
      }
      onReturn={() => props.setIsLogin(true)}
      // setFormType={props.setFormType}
      formType={props.formType}
    >
      <UserAuthBrokerCreateForm
        onSuccess={handleOnSuccess}
        setIsLogin={props.setIsLogin}
      />
    </UserAuthFormCard>
  );
};

export default BrokerCreateFormCard;
