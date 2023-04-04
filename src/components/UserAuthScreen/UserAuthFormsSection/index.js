import React, { useState } from "react";
import { userTypes } from "../../../global/userTypes";

// import BorrowerLoginFormCard from "../userAuthFormCards/BorrowerLoginFormCard";
import PasswordResetFormCard from "../userAuthFormCards/PasswordResetFormCard";
import BorrowerAuth from "./BorrowerAuth";
import EmployeeAuth from "./EmployeeAuth";
import { userAuthFormTypes } from "./userAuthFormTypes";
// import FormSectionCard from "../../UserAuth/FormSectionCard/FormSectionCard";
// import "./UserAuthFormsSection.css";

const UserAuthFormsSection = ({ userType }) => {
  const [formType, setFormType] = useState(userAuthFormTypes.MAGIC_LINK);

  if (userType === userTypes.BORROWER) {
    return <BorrowerAuth formType={formType} setFormType={setFormType} />;
  }

  if (userType === userTypes.FLATIRON_EMPLOYEE) {
    return <EmployeeAuth formType={formType} setFormType={setFormType} />;
  }

  if (formType === userAuthFormTypes.PASSWORD_RESET) {
    return (
      <PasswordResetFormCard formType={formType} setFormType={setFormType} />
    );
  }

  return <BorrowerAuth formType={formType} setFormType={setFormType} />;
  // return (
  //   <BorrowerLoginFormCard formType={formType} setFormType={setFormType} />
  // );
};

export default UserAuthFormsSection;
