import { isNil } from "lodash";
import React from "react";
import "./FlatironTableHeader.css";

const FlatironTableHeader = ({
  title,
  tableHeaderStyle,
  headerContent,
  customHeaderContent,
  color,
  blue,
}) => {
  const defaultContent = (
    <>
      <h2 className="header-title">{title}</h2>
      {headerContent ? (
        <div className="header-content">{headerContent}</div>
      ) : null}
    </>
  );
  const colorName = isNil(color) ? "default" : color;

  const mappedColorStyles = {
    blue: "#2356852e",
    white: "ffffff",
    default: "fafafb",
  };
  return (
    <header
      style={{
        borderBottom: "1px solid #e2e2e2 ",
        padding: customHeaderContent ? 0 : "6px 10px 5px",
        background: mappedColorStyles[colorName],
        ...tableHeaderStyle,
      }}
      className={`flatiron-table-header `}
    >
      {customHeaderContent ? title : defaultContent}
    </header>
  );
};

export default FlatironTableHeader;
