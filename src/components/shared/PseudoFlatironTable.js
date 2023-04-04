import { Box } from "@mui/system";
import { isNil } from "lodash";
import React from "react";
import FlatironTable from "./FlatironTable";
import FlatironTableHeader from "./FlatironTable/FlatironTableHeader";

export const PseudoFlatironTable = ({
  title,
  style,
  children,
  color, //blue || gray || white || undefined
  borderColor, //blue || none || undefined
  noPadding, //tableHeaderProps
  headerContent, //tableHeaderProps
  customHeaderContent, //tableHeaderProps
  tableHeaderStyle, //tableHeaderProps
  blue, //tableHeaderProps
}) => {
  const tableHeaderProps = {
    title,
    headerContent,
    customHeaderContent,
    tableHeaderStyle,
    blue,
    color,
  };

  const colorName = isNil(color) ? "default" : color;
  const borderColorName = isNil(borderColor) ? colorName : borderColor;
  console.log("colorName", colorName);
  console.log("borderColorName", borderColorName);
  const mappedBorderColorStyles = {
    blue: "2px solid #2356852e",
    none: "none",
    default: "2px solid  var(--borderGray)",
  };

  return (
    <>
      <FlatironTable
        style={{ ...style, border: mappedBorderColorStyles[borderColorName] }}
      >
        {title && <FlatironTableHeader {...tableHeaderProps} />}
        <Box padding={noPadding ? 0 : "10px"}>{children}</Box>
      </FlatironTable>
    </>
  );
};

export default PseudoFlatironTable;
