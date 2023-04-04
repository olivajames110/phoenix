import React from "react";
import UserAuthBorrowerLoginForm from "../../../../forms/UserAuthEmployeeLogin";
import UserAuthFormCard from "../UserAuthFormCard";
import { userAuthFormTypes } from "../UserAuthFormsSection/userAuthFormTypes";

const AdminLoginFormCard = (props) => {
  return (
    <UserAuthFormCard
      title="Admin Login"
      description="For Flatiron employees and brokers."
      setFormType={props.setFormType}
      formType={props.formType}
      hideBackButton
    >
      <UserAuthBorrowerLoginForm userEmail={props.userEmail} />
      <div className="between">
        <div
          // style={{ marginTop: "10px" }}
          id="create-account-button-container"
          className="center"
        >
          <button
            id="create-user"
            className="alt-login-button"
            onClick={() => props.setFormType(userAuthFormTypes.CREATE_USER)}
            type="button"
          >
            Create Flatiron Account
          </button>
        </div>
        <div
          // style={{ marginTop: "4px" }}
          id="password-reset-button-container"
          className="center"
        >
          <button
            id="password-reset"
            className="alt-login-button"
            onClick={() => props.setFormType(userAuthFormTypes.PASSWORD_RESET)}
            type="button"
          >
            Forgot Password
          </button>
        </div>
      </div>
      <div className="alt-login-container">
        <div className="alt-login-divider">
          <div className="label">Or</div>
        </div>
      </div>
    </UserAuthFormCard>
  );
};

export default AdminLoginFormCard;
