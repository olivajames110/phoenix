import React from "react";
import UserAuthPasswordResetForm from "../../../forms/UserAuthPasswordReset/UserAuthPasswordResetForm";
import UserAuthFormCard from "../UserAuthFormCard";

const PasswordResetFormCard = (props) => {
  return (
    <UserAuthFormCard
      title="Password Reset"
      setFormType={props.setFormType}
      formType={props.formType}
    >
      <UserAuthPasswordResetForm />
    </UserAuthFormCard>
  );
};

export default PasswordResetFormCard;
