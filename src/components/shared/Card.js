import React from "react";

const Card = ({ style, children, id, className }) => {
  const styles = {
    position: "relative",
    backgroundColor: "#fff",
    backdropFilter: "blur(3px)",
    boxShadow: "0px 2px 4px 1px #0000001c",
    width: "100%",
    maxWidth: "720px",
    borderRadius: "8px",
    padding: "20px",
    // padding: 40px 20px;
  };
  return (
    <div
      style={{ ...styles, ...style }}
      id={id}
      className={`card ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
