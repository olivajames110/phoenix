import React, { useState } from "react";
import BorrowerCreateFormCard from "../userAuthFormCards/BorrowerCreateFormCard";
import BorrowerLoginFormCard from "../userAuthFormCards/BorrowerLoginFormCard";

const BorrowerAuth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <BorrowerLoginFormCard setIsLogin={setIsLogin} />
  ) : (
    <BorrowerCreateFormCard setIsLogin={setIsLogin} />
  );
};

export default BorrowerAuth;
