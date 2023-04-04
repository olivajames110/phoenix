import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { isNil } from "lodash";
import React from "react";
import { useState } from "react";
import FormResults from "../form/FormResults";
import PseudoFlatironTable from "./PseudoFlatironTable";

const DynamicFormResults = ({
  data,
  title,
  level,
  tableStyle,
  tableHeaderStyle,
  hideHeader,
  hideToggles,
}) => {
  const [collapseLevel, setCollapseLevel] = useState(isNil(level) ? 1 : level);
  const toggleButtonStyle = {
    padding: " 0 8px",
  };

  const handleOnClick = (event, newAlignment) => {
    setCollapseLevel(newAlignment);
  };

  const toggles = (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Typography>Level</Typography>
      <ToggleButtonGroup
        value={collapseLevel}
        exclusive
        onChange={handleOnClick}
      >
        <ToggleButton sx={toggleButtonStyle} value={0}>
          0
        </ToggleButton>
        <ToggleButton sx={toggleButtonStyle} value={1} aria-label="centered">
          1
        </ToggleButton>
        <ToggleButton sx={toggleButtonStyle} value={2}>
          2
        </ToggleButton>
        <ToggleButton sx={toggleButtonStyle} value={3} aria-label="justified">
          3
        </ToggleButton>
        <ToggleButton sx={toggleButtonStyle} value={10} aria-label="justified">
          All
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );

  const titleName = hideHeader
    ? null
    : isNil(title)
    ? "Selected Raw Data"
    : title;
  return (
    <PseudoFlatironTable
      noPadding
      style={tableStyle}
      tableHeaderStyle={tableHeaderStyle}
      title={titleName}
      headerContent={hideHeader ? null : hideToggles ? null : toggles}
    >
      <FormResults full values={data} collapsed={collapseLevel} />
    </PseudoFlatironTable>
  );
};

export default DynamicFormResults;
