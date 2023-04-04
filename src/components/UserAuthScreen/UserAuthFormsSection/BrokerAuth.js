import React, { useState } from "react";
import BrokerCreateFormCard from "../userAuthFormCards/BrokerCreateFormCard";
import BrokerLoginFormCard from "../userAuthFormCards/BrokerLoginFormCard";

const BrokerAuth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <BrokerLoginFormCard setIsLogin={setIsLogin} />
  ) : (
    <BrokerCreateFormCard setIsLogin={setIsLogin} />
  );
};

export default BrokerAuth;
