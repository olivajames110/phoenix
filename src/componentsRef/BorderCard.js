import React from "react";

const BorderCard = ({ id, className, borderWidth, style, children, ref }) => {
  const styles = {
    border: "2px solid #bebdbd57",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  };
  return (
    <article
      id={id}
      style={{
        ...styles,
        ...style,
        borderWidth: borderWidth ? borderWidth : 2,
      }}
      className={`border-card ${className}`}
      ref={ref}
    >
      {children}
    </article>
  );
};

export default BorderCard;
