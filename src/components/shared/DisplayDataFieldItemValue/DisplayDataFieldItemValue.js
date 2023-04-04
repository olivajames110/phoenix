import React from "react";

const DisplayDataFieldItemValue = ({ fontSize, style, children }) => {
  const styles = {
    fontWeight: " 700",
    color: "#242526",
    fontSize: fontSize ? fontSize : "0.7rem",
    // lineHeight: " 1rem",
    ...style,
  };
  return (
    <span style={styles} className="display-data-field-item__value">
      {children}
    </span>
  );
};

export default DisplayDataFieldItemValue;
