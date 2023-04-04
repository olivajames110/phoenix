import React, { useState } from "react";
import UserAuthBorrowerCreateForm from "../../../forms/UserAuthBorrowerCreateForm";
import UserAuthFormCard from "../UserAuthFormCard";

const BorrowerCreateFormCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const handleOnSuccess = (email) => {
    setIsSuccess(true);
    setUserEmail(email);
  };

  return (
    <UserAuthFormCard
      title={isSuccess ? "Account Created!" : "Borrower Account Creation"}
      description={
        isSuccess
          ? ` We sent a confirmation email to ${userEmail}. Please confirm this is you.`
          : "Enter your email address  to receive a login link."
      }
      onReturn={() => props.setIsLogin(true)}
      // setFormType={props.setFormType}
      formType={props.formType}
    >
      <UserAuthBorrowerCreateForm
        onSuccess={handleOnSuccess}
        setIsLogin={props.setIsLogin}
      />
    </UserAuthFormCard>
  );
};

export default BorrowerCreateFormCard;
