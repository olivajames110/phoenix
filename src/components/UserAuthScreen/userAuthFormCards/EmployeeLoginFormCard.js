import React, { useState } from "react";
import UserAuthEmployeeLogin from "../../../forms/UserAuthEmployeeLogin";
import { resetLocalStorage } from "../../../helpers/resetLocalStorage";
import UserAuthFormCard from "../UserAuthFormCard";

const EmployeeLoginFormCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const handleOnSuccess = (email) => {
    setIsSuccess(true);
    setUserEmail(email);
    resetLocalStorage();
  };

  const titleText = isSuccess ? "Magic Link Sent!" : "Employee Login";
  const descriptionText = isSuccess
    ? `We sent an email to ${userEmail}`
    : "Enter your Flatiron email address  to receive a login link.";

  return (
    <UserAuthFormCard
      title={titleText}
      description={descriptionText}
      setFormType={props.setFormType}
      hideBackButton
      formType={props.formType}
    >
      <UserAuthEmployeeLogin onSuccess={handleOnSuccess} />
    </UserAuthFormCard>
  );
};

export default EmployeeLoginFormCard;
