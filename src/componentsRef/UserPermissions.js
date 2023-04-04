import React from "react";
import { useSelector } from "react-redux";

const UserPermissions = ({ userTypes, children }) => {
  const userType = useSelector((state) => state.userType);

  let returnVal = null;

  if (userTypes) {
    userTypes.forEach((ut) => {
      // console.log(ut, userType);
      if (ut === userType) {
        returnVal = children;
      }
    });
  }

  return returnVal;
};

export default UserPermissions;
